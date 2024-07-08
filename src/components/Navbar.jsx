import React, { useState } from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { userContext } from '../context/usercontext'
import Loginbutton from './Loginbutton'
import Logout from './Logout'
function Navbar() {
  const {user} = useContext(userContext)
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  return <>
    <div className="navbar bg-main">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden w-10 p-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52 z-50">
      
      <li><NavLink className='text-xl font-medium mr-2' to={'/'}>Home</NavLink></li>
      <li><NavLink className='text-xl font-medium mr-2' to={'/explore'}>Explore</NavLink></li>
      {user?"":<li><NavLink className='text-xl font-medium mr-2' to={'/signup'}>Signup</NavLink></li>}
      <li><NavLink className='text-xl font-medium mr-2' to={'/contact'}>Contact</NavLink></li>
      <li><NavLink className='text-xl font-medium mr-2' to={'/services'}>Services</NavLink></li>
      {user?<li><NavLink className='text-xl font-medium mr-2' to={'/profile'}>Profile</NavLink></li>:''}
      {user?.admin=='yes'?<li><NavLink className='text-xl font-medium mr-2' to={'/admin'}>Admin</NavLink></li>:''}
      </ul>
    </div>
    <NavLink to={'/'} className="btn btn-ghost text-3xl font-bold flex">Library</NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink className='text-xl font-medium mr-2' to={'/'}>Home</NavLink></li>
      <li><NavLink className='text-xl font-medium mr-2' to={'/explore'}>Explore</NavLink></li>
      {user?"":<li><NavLink className='text-xl font-medium mr-2' to={'/signup'}>Signup</NavLink></li>}
      <li><NavLink className='text-xl font-medium mr-2' to={'/contact'}>Contact</NavLink></li>
      <li><NavLink className='text-xl font-medium mr-2' to={'/services'}>Services</NavLink></li>
      {user?<li><NavLink className='text-xl font-medium mr-2' to={'/profile'}>Profile</NavLink></li>:''}
      {user?.admin=='yes'?<li><NavLink className='text-xl font-medium mr-2' to={'/admin'}>Admin <i className="ri-edit-2-fill"></i></NavLink></li>:''}
    </ul>
  </div>
  <div className="navbar-end">
    
    {user?<div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={user?user.photoURL:""} />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-30 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li className='mb-2 h-10'>
          <NavLink to={'/profile/edit'} className="flex items-center justify-between h-10 text-lg text-center p-4">
            Edit Profile
          </NavLink>
        </li>
        <Logout />
      </ul>
    </div>:<NavLink to={'/login'} className="buttton text-lg text-white font-semibold">Login<i className="ri-login-box-fill text-xl text-white"></i></NavLink>}
  </div>
</div>

  </>
}

export default Navbar
