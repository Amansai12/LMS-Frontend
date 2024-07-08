import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { userContext } from '../context/usercontext'
import Redirecting from './Redirecting'

function AdminRoute() {
    const [permit,setPermit] = useState(false)
    const {user} = useContext(userContext)
    const navigate = useNavigate()
    
    
  
    if(user?.admin == 'yes'){
        return <Outlet />
    }else{
        return(
            <Redirecting />
        )
    }
}

export default AdminRoute