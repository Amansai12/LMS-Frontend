import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { userContext } from '../context/usercontext'
import Redirecting from './Redirecting'

function Privateroute() {
    const [permit,setPermit] = useState(false)
    const {user} = useContext(userContext)
    const navigate = useNavigate()
    // useEffect(()=>{

    // },[])
    
  
    if(user){
        return <Outlet />
    }else{
        return(
            <Redirecting />
        )
    }
}

export default Privateroute
