import React, { useState } from 'react'
import Swal from 'sweetalert2'

import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Adminnav from '../components/Adminnav';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import Loader2 from '../components/Loader2';
import Loader3 from '../components/Loader3';
function Students() {
    
    const c = document.cookie.split(';')
    const c1 = c[1].split('=')[1]
    const {data:r,isLoading,isError,isSuccess} = useQuery({
        queryKey:['borrowers'],
        queryFn: async ()=>{
          const p = await axios.get('https://lms-backend-zjpz.onrender.com/users',{
            headers:{
                "Authorization":c1
            }
          })
          setData(p?.data?.data)
          setRes(p?.data?.data)
          setTotalpages(Math.ceil(p?.data?.data?.length/contentperpage))
          return p.data.data;
        }
      })

    const [data,setData] = useState();
    const [res,setRes] = useState()
    const [ress,setRess] = useState()
    const [pages,setPages] = useState(1)
    const [contentperpage,setContentperpage] = useState(8)
    const [totalpages,setTotalpages] = useState()
    const removeborrower = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Removed!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    }
    if(isLoading){
        return <Loader /> 
    }
    if(isSuccess){
        let lastindex = pages * contentperpage 
    let firstindex = lastindex - contentperpage;
    const x = res?.slice(firstindex,lastindex)
    const filt = (search) => {
        setRess(search)
        let temp = data?.filter((ele) => (ele.name.toLowerCase().includes(search)))
        setTotalpages(temp.length/contentperpage)
        setRes(temp)
    }
    return (
        <div className='min-h-screen'>
            <Adminnav />
            <div className="borrowhead">
                <h1 className='text-3xl my-5 font-bold text-center'>Students</h1>
            </div>
            <label className="input input-bordered flex items-center gap-2 my-4  mx-5 md:mx-20">
      <input type="text" className="grow" placeholder="Search by id" value={ress} onChange={(e)=> filt(e.target.value)}/>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
    </label>
          {data?<div style={{minHeight:'65vh'}} className="overflow-x-auto w-11/12 mx-auto my-4">
      <table className="table">
        {/* head */}
        <thead className='bg-red-300 text-center'>
          <tr>
            <th style={{border:'1px solid black'}} className='text-lg font-bold text-black'>Profile</th>
            <th style={{border:'1px solid black'}} className='text-lg font-bold text-black'>Name</th>
            <th style={{border:'1px solid black'}} className='text-lg font-bold text-black'>Id</th>
            <th style={{border:'1px solid black'}} className='text-lg font-bold text-black'>Email</th>
            <th style={{border:'1px solid black'}} className='text-lg font-bold text-black'>Mobile No</th>
            <th style={{border:'1px solid black'}} className='text-lg font-bold text-black'>Remarks</th>
            
          </tr>
        </thead>
        <tbody className='text-center'>
          {data?.length > 0?x.map((ele,index)=>(
            <tr key={index} className='hover:bg-red-100 transition cursor-pointer'>
                <td style={{border:'1px solid black'}} className='text-lg font-semibold'>
                <div className="w-10 rounded-full overflow-hidden">
          <img alt="Tailwind CSS Navbar component" src={ele.photoURL} />
        </div>
                </td>
                <td style={{border:'1px solid black'}}  className='text-lg font-semibold'>{ele.name}</td>
                <td style={{border:'1px solid black'}}  className='text-lg'>{ele.id}</td>
                <td style={{border:'1px solid black'}}  className='text-lg'>{ele.email}</td>
                <td style={{border:'1px solid black'}}  className='text-lg'>{ele.phone}</td>
                <td style={{border:'1px solid black'}}  className='text-lg'>{ele.remarks}</td>
            </tr>
            
          )):<h1 className='text-3xl font-semibold my-5'>No Results</h1>}
        </tbody>
      </table>
    </div>:<Loader3 />}
      <div className='w-full flex justify-center my-5'>
                <div className="join">
                <button disabled={pages <= 1} className="join-item btn bg-red-300 text-lg" onClick={()=>setPages(pages-1)}>«</button>
                <button className="join-item btn bg-red-300">{`Page ${pages} of ${totalpages}`}</button>
                <button disabled={pages >= totalpages} className="join-item btn bg-red-300" onClick={()=>setPages(pages+1)}>»</button>
                </div>
            </div>
            <Footer />
        </div>
      )
    }
  
}

export default Students
