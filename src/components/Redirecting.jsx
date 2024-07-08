import React, { useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

function Redirecting() {
    const navigate = useNavigate()
    // useEffect(()=>{

    // },[])
    const [count,setCount] = useState(5)
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount(count - 1)
            if(count === 0){
                navigate('/login');
            }
        },1000);
        return () => clearInterval(interval)
    },[count,navigate])
  return (
    <div style={{height:"88vh"}} className='flex items-center justify-center flex-col'>
                <i className="ri-error-warning-fill text-7xl text-red-700"></i>
                <h1 className='text-3xl text-center font-bold'>Please Login to access this page</h1>
                <h1 className='text-3xl text-center font-bold text-red-500'>If you are already loggedin then you should be admin to access this page</h1>
                <h1 className='text-3xl text-center font-bold mt-4'>Redirecting to Login page in {count}</h1>
            </div>
  )
}

export default Redirecting
