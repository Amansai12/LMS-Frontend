import React, { useContext, useEffect, useRef, useState } from 'react'
import { userContext } from '../context/usercontext'
import { ToastContainer, toast } from "react-toastify";
import {getDownloadURL, getStorage,ref, uploadBytes, uploadBytesResumable} from 'firebase/storage'
import app from '../app/firebase'
import { useQueryClient } from '@tanstack/react-query';
import Cookies from 'js-cookie'
function About() {
  const {user,setUser} = useContext(userContext)
    const email = user?user.email:"error"
    const [name,setName] = useState(user?user.name:"")
    const [phone,setPhone] = useState(user?user.phone:"")
    const [id,setId] = useState(user?user.id:"")
    const [loading,setloading] = useState(false)
    const fileref = useRef()
    const [files,setFiles] = useState(undefined)
    const [percent,setPercent] = useState(0)
    const [imagerror,setImagerror] = useState(null)
    const [url,setUrl] = useState(null)
    const formdata = {name,id,phone,email,photoURL:url}
    const queryClient = useQueryClient()
    useEffect(()=>{
      if(files){
        handlefiles(files)
      }
    },[files])
    const handlefiles = async (image) => {
      setloading(true)
      const storage = getStorage(app)
      const filename = new Date().getTime() + image.name
      const storageref = ref(storage,filename)
      const uploadTask = uploadBytesResumable(storageref,image)
      uploadTask.on(
        'state_changed',(snapshot)=>{
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setPercent(Math.round(progress))
        },
        (error)=>{
          setImagerror(error)
          setloading(false)
        },
        ()=>{
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => setUrl(downloadURL))
          setloading(false)
          
        }
      );
    }
    const senddata = async (e) => {
      e.preventDefault();
      setloading(true)
      try{
        
        const data = await fetch('http://localhost:3000/users/update',{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                "authorization":Cookies.get("auth")
            },
            credentials:'include',
            body: JSON.stringify(formdata)
            
        });
        const res = await data.json();
        if(res.message){
          toast.error(res.message)
        }
        else{
          setUser(res)
          localStorage.setItem("userdetails",JSON.stringify(res))
          queryClient.invalidateQueries({queryKey:['myBorrows']})
          toast.success("Successfully updated");
        }
        setloading(false)
        
    }catch(err){
        console.log("hi",err)
        toast.error("Something went wrong!!!")
        setloading(false)
    }
  }
  return (
    <>
     <div className="w-full my-10 flex justify-center items-center" style={{minHeight:"80vh"}}>
        <input accept="image/png, image/jpg, image/jpeg" type="file" ref={fileref} hidden onChange={(e) => setFiles(e.target.files[0])}/>
        <div className=' w-11/12 mx-auto md:w-1/2 flex flex-col items-center bg-red-200 py-4 rounded-md relative'>
        <h1 className='text-4xl font-bold mb-5 text-red-400'>Edit your profile</h1>
        <i onClick={() => fileref.current.click()} className="ri-edit-2-fill absolute top-36 text-2xl right-6/12 bg-red-200 text-center w-24 opacity-85 cursor-pointer"></i>
            <img onClick={() => fileref.current.click()} className='rounded-full w-24 mb-2 cursor-pointer' src={user?user.photoURL:""} alt="" />
            <p>{imagerror?<span className='text-lg font-semibold text-red-600'>{"Upload failed"}</span>: (percent > 0 && percent < 100 ? <span className='font-semibold text-lg text-green-700'>{`Uploading.. ${percent} %`}</span>:(percent == 100 ? <span className='text-lg text-green-800 font-semibold my-3'><i className="ri-checkbox-circle-fill"></i> {"Uploaded successfully, click save to continue"}</span>:""))}</p>
        <label className="w-10/12 md:w-7/12 input input-bordered flex items-center gap-2 mb-3 mt-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
      <input type="text" className="grow" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
    </label>
    <label className="w-10/12 md:w-7/12 input input-bordered flex items-center gap-2 mb-3">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
      <input type="text" className="grow" placeholder="Id" value={id} onChange={(e)=>setId(e.target.value)} />
    </label>
    <label className="w-10/12 md:w-7/12 input input-bordered flex items-center gap-2 mb-3">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
      <input type="text" className="grow" placeholder="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
    </label>
        <button disabled={loading} onClick={(e) =>senddata(e)} className='btn py-0 px-10 bg-red-400 text-lg text-white hover:bg-green-400'>{loading?"loading..":"save"}</button>
    </div>
    </div>
    <ToastContainer />
    </>
  )
}

export default About