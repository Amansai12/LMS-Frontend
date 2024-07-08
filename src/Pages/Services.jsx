import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Services() {
  return (
    <>
    <Navbar />
    <div className='p-7 flex flex-col items-center gap-5'>

          <h1 className='text-5xl font-bold text-center mb-4'>Services</h1>
        <div style={{border:'1px solid black'}} className='bg-red-200 flex-col md:flex-row text-center md:text-left flex rounded-md p-4 justify-evenly items-center w-full max-w-5xl'>
            
            <i className="ri-book-fill text-red-400" style={{fontSize:'11rem'}}></i>
          
          
            <div className='md:w-7/12 w-full p-3'>
                <h1 className='text-5xl font-bold mb-3 text-red-400'>All kind of Books</h1>
                <p className='font-medium text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ea doloremque laboriosam similique vel saepe, rerum pariatur tempore quisquam aut quasi distinctio, voluptatum alias soluta aliquam. Est veritatis natus minima?</p>
            </div>
        </div>
        <div style={{border:'1px solid black'}} className='bg-red-200 flex-col md:flex-row text-center md:text-left flex rounded-md p-4 justify-evenly items-center gap-9 w-full max-w-5xl'>
            <div className=''>
            <i className="ri-wifi-fill text-red-400" style={{fontSize:'11rem'}}></i>
            </div>
            <div className='md:w-7/12 w-full p-3'>
                <h1 className='text-5xl font-bold mb-3 text-red-400'>Wifi</h1>
                <p className='font-medium text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ea doloremque laboriosam similique vel saepe, rerum pariatur tempore quisquam aut quasi distinctio, voluptatum alias soluta aliquam. Est veritatis natus minima?</p>
            </div>
        </div>
        <div style={{border:'1px solid black'}} className='bg-red-200 flex-col md:flex-row text-center md:text-left flex rounded-md p-4 justify-evenly items-center gap-9 w-full max-w-5xl'>
            <div className=''>
            <i className="ri-temp-cold-fill text-red-400" style={{fontSize:'11rem'}}></i>
            </div>
            <div className='md:w-7/12 w-full p-3'>
                <h1 className='text-5xl font-bold mb-3 text-red-400'>Air Conditioned</h1>
                <p className='font-medium text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ea doloremque laboriosam similique vel saepe, rerum pariatur tempore quisquam aut quasi distinctio, voluptatum alias soluta aliquam. Est veritatis natus minima?</p>
            </div>
        </div>
        </div>
    <Footer />
    </>
  )
}

export default Services