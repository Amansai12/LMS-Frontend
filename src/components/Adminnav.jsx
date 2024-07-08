import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { userContext } from '../context/usercontext';
import Logout from './Logout';

function Adminnav() {
    const x = new Date();
    const {user} = useContext(userContext)
  return (
    <div>
      <div className="navbar bg-main">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li className='text-xl font-semibold mr-2'><NavLink className={"text-xl"} to={'/'}>Home</NavLink></li>
      <li><NavLink to={'/admin/upload'} className='text-xl font-semibold mr-2'>Add Book</NavLink></li>
      <li><NavLink to={'/admin/update'} className='text-xl font-semibold mr-2'>Update Book</NavLink></li>
      <li><NavLink to={'/admin/borrows'} className='text-xl font-semibold mr-2'>Borrows</NavLink></li>
      <li><NavLink className='text-xl font-semibold mr-2' to={'/admin/lend'}>Lend</NavLink></li>
      <li><NavLink to={'/admin/timedout'} className='text-xl font-semibold mr-2'>Timed out</NavLink></li>
      <li><NavLink className='text-xl font-semibold mr-2' to={'/admin/books'}>Books</NavLink></li>
      <li><NavLink className='text-xl font-semibold' to={'/admin/students'}>Students</NavLink></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl font-bold">Admin Panel</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className='text-xl font-semibold mr-2'><NavLink to={'/'}>Home</NavLink></li>
      <li><NavLink to={'/admin/upload'} className='text-xl font-semibold mr-2'>Add Book</NavLink></li>
      <li><NavLink to={'/admin/update'} className='text-xl font-semibold mr-2'>Update Book</NavLink></li>
      <li><NavLink to={'/admin/borrows'} className='text-xl font-semibold mr-2'>Borrows</NavLink></li>
      <li><NavLink className='text-xl font-semibold mr-2' to={'/admin/lend'}>Lend</NavLink></li>
      <li><NavLink to={'/admin/timedout'} className='text-xl font-semibold mr-2'>Timed out</NavLink></li>
      <li><NavLink className='text-xl font-semibold mr-2' to={'/admin/books'}>Books</NavLink></li>
      <li><NavLink className='text-xl font-semibold' to={'/admin/students'}>Students</NavLink></li>
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
          <NavLink to={'/profile'} className="flex items-center justify-between h-10 text-lg text-center p-4">
            Profile
          </NavLink>
        </li>
        <Logout />
      </ul>
    </div>:<NavLink to={'/login'} className="btn bg-red-400 text-white rounded-xl cursor-pointer hover:bg-slate-400 x">Login</NavLink>}
  </div>
</div>
    </div>
  )
}

export default Adminnav
