import React from 'react'
import { NavLink } from 'react-router-dom'

function Hero() {
  return (
    <>
    <div className='relative' style={{minHeight:'70vh'}}>
    <div className='w-5/6 max-w-50 mx-auto'>
        <div className='flex justify-between items-center min-h-5/6 gap-2 flex-col-reverse md:flex-row my-3'>
      <div className="info md:w-2/5 flex justify-center items-start flex-col text-center md:text-left">
        <h1 className='md:text-6xl text-5xl font-bold text md:self-start self-center'><i className="ri-book-2-line text-7xl"></i> RGUKT <span className='text-red-400'>Library</span></h1>
        <p className='text-xl my-4 selection:bg-red-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, minima at eaque est, non pariatur voluptatum, nostrum corrupti praesentium qui quas! Deserunt, nesciunt aut fugit necessitatibus amet delectus sint ex?</p>
        <NavLink to={'/profile/myborrows'} className='btn z-10 bg-red-400 text-white hover:bg-slate-200 hover:text-black self-center md:self-start '>Borrows <i className="ri-arrow-right-line text-xl"></i></NavLink>
      </div>
      <div className="z-10 image w-full md:w-1/2 flex justify-center items-center">
        <img src="https://res.cloudinary.com/damkoygfn/image/upload/v1720249194/msmhdkj69lglore7hjex.png" alt="" />
      </div>
    </div>
    <svg className='absolute top-1/2 left-0 -z-1 hidden lg:block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fca59a" fillOpacity="1" d="M0,64L40,80C80,96,160,128,240,149.3C320,171,400,181,480,181.3C560,181,640,171,720,181.3C800,192,880,224,960,234.7C1040,245,1120,235,1200,229.3C1280,224,1360,224,1400,224L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
    </div>
    </div>
    </>
  )
}

export default Hero
