import React , {useState} from 'react'
import Footer from './Footer'
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Adminnav from './Adminnav';
function UpdateBook() {
  const [student,setStudent] = useState('')
  const [book,setBook] = useState('')
  const [dt,setDt] = useState('')
  const [loading,setLoading] = useState(false)
  const formdata = {"book_id":book,"quantity":dt}
  const c = document.cookie.split(';')
  const c1 = c[1].split('=')[1]
  const lend = async () => {
    setLoading(true
    )
    try{
      const d = await axios.post("https://lms-backend-zjpz.onrender.com/updatebook",formdata,{
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
    <>
    <div>
      <Adminnav />
      <div className='flex justify-center items-center p-3' style={{minHeight:"85vh"}}>
      <div className=" p-4 rounded-md my-4 bg-red-50 flex justify-center items-center flex-col" style={{width:"500px",border:"1px solid black"}}>
        
        <h1 className="text-5xl font-bold text-center pb-7 my-2"><i className="ri-book-2-fill"></i> Update Book</h1>
        <label className="w-full input input-bordered flex items-center gap-2 mb-3">
        <i className="ri-book-fill text-xl"></i>
          <input type="text" className="grow text-lg" placeholder="Book id" value={book} onChange={(e)=>setBook(e.target.value)} />
        </label>
        <label className="w-full input input-bordered flex items-center gap-2 my-3">
          <label className="font-bold text-lg"><i className="ri-numbers-fill"></i></label>
          <input type="Number" className="grow text-lg" placeholder="quantity" value={dt} onChange={(e)=>setDt(e.target.value)} />
        </label>
        <button disabled={loading} className="w-10 btn px-10 bg-red-400 text-white mt-5" onClick={lend}>{loading?"Updating..":"Update"}</button>
      </div>
      </div>
      <ToastContainer />
      <Footer />
      </div>
    </>
  )
}

export default UpdateBook