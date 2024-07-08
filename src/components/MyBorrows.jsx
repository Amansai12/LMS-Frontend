import React,{useState} from 'react'
import { useContext } from 'react'
import { userContext } from '../context/usercontext'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import Navbar from './Navbar'
import Footer from './Footer'
import Loader from './Loader'
import Cookies from 'js-cookie'
import Loader3 from './Loader3'
function MyBorrows() {
  const {user} = useContext(userContext)
  const c = Cookies.get('auth')
  const {data:r,isLoading,isError,isSuccess} = useQuery({
    queryKey:['myBorrows'],
    queryFn: async ()=>{
      const p = await axios.get(`https://lms-backend-zjpz.onrender.com/users/myborrows/${user?._id}`,{
        headers:{
          "Authorization":c
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
    const removeborrower = async (id,book_id) => {
        
    }
    if(isLoading){
        return <Loader />
    }
    if(isError){
      return <h1>Error!!</h1>
    }
    if(isSuccess){
      console.log(r)
        let lastindex = pages * contentperpage 
    let firstindex = lastindex - contentperpage;
    const x = res?.slice(firstindex,lastindex)
    const filt = (search) => {
        setRess(search)
        let temp = data?.filter((ele) => (ele.student_id.name.toLowerCase().includes(search)))
        setTotalpages(temp.length/contentperpage)
        setRes(temp)
    }
    return (
        <>
        {data?<div style={{minHeight:'65vh'}} className="overflow-x-auto w-11/12 mx-auto my-4">
      <table className="table">
        {/* head */}
        <thead className='bg-red-300 text-center'>
          <tr>
            <th style={{border:'1px solid black'}} className='text-lg font-bold text-black'>Name</th>
            <th style={{border:'1px solid black'}} className='text-lg font-bold text-black'>Book Id</th>
            <th style={{border:'1px solid black'}} className='text-lg font-bold text-black'>Category</th>
            <th style={{border:'1px solid black'}} className='text-lg font-bold text-black'>Borrow date</th>
            <th style={{border:'1px solid black'}} className='text-lg font-bold text-black'>Due Date</th>
            
          </tr>
        </thead>
        <tbody className='text-center'>
          {data?.length > 0?x.map((ele,index)=>(
            <tr key={index} className='hover:bg-red-100 transition cursor-pointer'>
                <td style={{border:'1px solid black'}} className='text-lg font-semibold'>{ele.book_id.name}</td>
                <td style={{border:'1px solid black'}} className='text-lg text-center'>{ele.book_id.bookid}</td>
                <td style={{border:'1px solid black'}} className='text-lg'>{ele.book_id.category}</td>
                <td style={{border:'1px solid black'}} className='text-lg'>{ele.borrowDate.split('T')[0]}</td>
                <td style={{border:'1px solid black'}} className='text-lg'>{ele.endTime.split('T')[0]}</td>

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
        </>
      )
  }
}

export default MyBorrows