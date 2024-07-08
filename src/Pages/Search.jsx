import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Category from '../components/Category'
import '../App.css'
import Footer from '../components/Footer'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import Loader from '../components/Loader'
import Loader3 from '../components/Loader3'
function Search() {
    const [search,setSearch] = useState();
   
const {data:r,isLoading,isError,isSuccess} = useQuery({
    queryKey:['books'],
    queryFn: async ()=>{
      const p = await axios.get('https://lms-backend-zjpz.onrender.com/books')
      setRes(p.data.data)
      return p.data.data;
    }
  })
  
    const [con,setCon] = useState()
    const [res,setRes] = useState()
    
    if(isLoading){
        return <Loader />
      }
  if(isSuccess){
    const filt = (searchvalue) => {
        setRes(r)
        setSearch(searchvalue);
        let x = r.filter((ele) => ele.name.toLowerCase().includes(searchvalue) || ele.name.includes(searchvalue))
        setRes(x)
    }
    const catfilt = (num) =>{
        let x = [];
        setRes(data)
        if(num == 1){
            x = r.filter((ele) => ele.category == "Entertainment")
        }else if(num == 2){
            x = r.filter((ele) => ele.category == "Inspirational")
        }else{
            x = r.filter((ele) => ele.category == "Educational")
        }
        setRes(x)
    }
    return (
        <div>
          <Navbar />
          <div className='min-h-10 flex items-center justify-center py-5 px-3 flex-col'>
            <h1 className='text-3xl md:text-4xl font-bold mb-7'>Start adventure</h1>
          <div className='flex w-full justify-center items-center flex-col md:flex-row gap-2'>
          <div className="input-box w-11/12 md:w-1/2">
          <i className="ri-search-line"></i>
      <input type="text" placeholder="Search here..." onChange={(e) => filt(e.target.value)} value={search} />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1 bg-rose-300"><i className="ri-filter-2-fill text-2xl"></i></div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        <li><a className='text-lg font-semibold' onClick={()=>catfilt(1)}>Entertainment</a></li>
        <li><a className='text-lg font-semibold' onClick={()=>catfilt(2)}>Inspirational</a></li>
        <li><a className='text-lg font-semibold' onClick={()=>catfilt(4)}>Educational</a></li>
        <li><a className='text-lg font-semibold' onClick={()=>catfilt(1)}>Others</a></li>
        
      </ul>
    </div>
          </div>
    
          </div>
        <Category content={res}/>
        <Footer />
        </div>
      )
  }
}

export default Search
