import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Qa from '../components/Qa'

function Contact() {
    const [search,setSearch] = useState()
    const filt = (val) =>{
      
    }
  return (
    <>
    <Navbar />
    <div className='w-full flex flex-col justify-center items-center my-5'>
    <div className="input-box w-11/12 md:w-1/2 my-7">
      <i className="ri-search-line"></i>
  <input type="text" placeholder="Enter Your Queries" onChange={(e) => setSearch(e.target.value)} value={search} />
</div>
<button className='btn bg-red-400'>Submit</button>
<h1 className='text-center text-4xl font-bold mt-5'>Recent Queries</h1>
<Qa />
    </div>
    <Footer />
</>
  )
}

export default Contact
