import React, { useState } from "react";
import Adminnav from "./Adminnav";
import Footer from "./Footer";
import '../App.css'
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
function Lend() {
  const [student,setStudent] = useState('')
  const [book,setBook] = useState('')
  const [dt,setDt] = useState('')
  const [loading,setLoading] = useState(false)
  const formdata = {"student_id":student,"book_id":book,"endDate":dt}
  const c = document.cookie.split(';')
  const c1 = c[1].split('=')[1]
  const lend = async () => {
    setLoading(true
    )
    try{
      const d = await axios.post("https://lms-backend-zjpz.onrender.com/users/lend",formdata,{
        headers:{
          "Authorization":c1
        }
      })
      console.log(d)
      toast.success(d.data.message)
      setLoading(false)
    }catch(err){
      console.log(err)
      toast.error("Invalid inputs")
      setLoading(false)
    }
  }
  return (
    <div>
      <Adminnav />
     <div className="flex justify-center items-center p-3" style={{minHeight:"80vh"}}>
     <div className="p-4 rounded-md bg-red-50 my-4 flex justify-center items-center flex-col" style={{border:"1px solid black",width:"500px"}}>
        
        <h1 className="text-5xl font-bold text-center my-2 pb-7"><i className="ri-book-2-fill"></i> Lend Book</h1>
        <label className="w-full input input-bordered flex items-center gap-2 mb-3">
        <i className="ri-book-fill text-xl"></i>
          <input type="text" className="grow text-lg" placeholder="Book id" value={book} onChange={(e)=>setBook(e.target.value)} />
        </label>
        <label className="w-full input input-bordered flex items-center gap-2">
        <i className="ri-user-fill text-xl"></i>
          <input type="text" className="grow text-lg" placeholder="student id" value={student} onChange={(e)=>setStudent(e.target.value)}/>
        </label>
        <label className="w-full input input-bordered flex items-center gap-2 my-3">
          <label className="font-bold text-lg">Due date :</label>
          <input type="date" className="grow text-lg" placeholder="student id" value={dt} onChange={(e)=>setDt(e.target.value)} />
        </label>
        <button disabled={loading} className="w-10 btn px-10 bg-red-400 text-white mt-5" onClick={lend}>{loading?"Lending..":"Lend"}</button>
      </div>
     </div>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default Lend;
