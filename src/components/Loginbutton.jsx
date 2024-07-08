import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../context/usercontext'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Loginbutton(props) {
    const formdata = props.formdata
    const navigate = useNavigate()
    const {user,setUser} = useContext(userContext)
    const [loading,setloading] = useState(false)
    const senddata = async (e) => {
        e.preventDefault();
        setloading(true)
        try{
          const data = await fetch('https://lms-backend-zjpz.onrender.com/login',{
              method:"POST",
              headers:{
                  "Content-Type": "application/json",
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
            // toast.success("Successfully loggedin");
            navigate('/')
          }
          setloading(false)
          
      }catch(err){
          console.log(err)
          toast.error("Something went wrong!!!")
          setloading(false)
      }
    }
  return (
    <div>
      <button onClick={(e) => senddata(e)} disabled={loading} className='btn bg-red-300'>{loading?"Loading..":"Login"}</button>
      <ToastContainer />
    </div>
  )
}

export default Loginbutton
