import React, { useContext } from 'react'
import { userContext } from '../context/usercontext'
import { useNavigate } from 'react-router-dom'

function Logout() {
    const {setUser} = useContext(userContext)
    const navigate = useNavigate()
    const logout = () =>{
        localStorage.removeItem("userdetails")
        setUser(null)
        navigate('/')
    }
  return (
    <button className='btn py-2 px-5 bg-green-700 text-white hover:bg-red-500' onClick={logout}>Logout</button>
  )
}

export default Logout
