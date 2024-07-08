import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { userContext } from '../context/usercontext'
import MyBorrows from '../components/MyBorrows'

function UserProfile() {
  const user = useContext(userContext)
  console.log(user)
  return (
    <>
    <Navbar />
    <div style={{minHeight:"85vh"}} className='p-4 flex flex-col gap-8'>
        <div className='w-full max-w-9xl mx-auto bg-red-200 p-4 rounded-md'>
            <div className='flex justify-center mb-2'>
            <h1 className='text-3xl font-bold  text-black py-0 px-4 rounded-3xl'>PROFILE</h1>
            
            </div>
            <hr />
            <div className='flex flex-col md:flex-row my-4 gap-6 justify-center items-center'>
                <div className='h-52 rounded-full overflow-hidden'>
                    <img className='h-52' src={user?.user.photoURL} alt="" />
                </div>
                <div className='flex flex-col gap-6'>
                    <h1 className='uppercase text-4xl font-bold text-red-400 text-center md:text-left'>{user?.user.name}</h1>
                    <div className='flex gap-5 md:flex-row flex-col'>
                        <div className='bg-red-100 p-3 rounded-md flex items-center gap-2'>
                            <i className="ri-user-fill text-4xl"></i>
                            <div>
                            <h1 className='font-semibold text-xl'>Id</h1>
                            <h1>{user?.user.id}</h1>
                            </div>
                        </div>
                        <div className='bg-red-100 p-3 rounded-md flex items-center gap-2'>
                            <i className="ri-phone-fill text-4xl"></i>
                            <div>
                            <h1 className='font-semibold text-xl'>Phone</h1>
                            <h1>{user?.user.phone}</h1>
                            </div>
                        </div>
                        <div className='bg-red-100 p-3 rounded-md flex items-center gap-2'>
                        <i className="ri-mail-fill text-4xl"></i>
                            <div>
                            <h1 className='font-semibold text-xl'>Email</h1>
                            <h1>{user?.user.email}</h1>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div className='max-w-9xl w-full mx-autop-4 rounded-md'>
            <div className='mb-2'>
            <h1 className='text-3xl text-center font-semibold mb-4'>MY BORROWINGS</h1>
            <MyBorrows />
            </div>
            
               
        </div>
    </div>
    <Footer />
    </>
  )
}

export default UserProfile