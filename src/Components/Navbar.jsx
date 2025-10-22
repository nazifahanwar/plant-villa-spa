import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png'
import  './Navbar.css'
const Navbar = () => {
const links =
    <>
    <li><NavLink className='text-white font-semibold' to='/'>Home</NavLink></li>
    <li><NavLink className='text-white font-semibold' to='/plants'>Plants</NavLink></li>
    <li><NavLink className='text-white font-semibold' to='/my-profile'>My Profile</NavLink></li>
    </>

    return (
      <div className='bg-base-300 shadow-sm'>
  <div className='container mx-auto'>
        <div className="navbar pb-0">
    <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <div className='flex items-center justify-center lg:gap-1'>
        <img src={logo} className="h-[40px] w-[40px]" />
    <Link className=" text-xl playwrite-au-tas text-white pt-2">Plant Villa</Link>

    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <div className='flex'>
        {links}
    </div>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='/register' className=' text-white font-semibold rounded-xl p-2 hover:border-gray-400 hover:border-2' >Register</Link>
    <Link to='/login'className=' border-1 rounded-xl p-2 bg-white ml-3 text-[#344e41] font-semibold'>Log in</Link>
  </div>
  </div>
</div>
 </div>
    )        
};

export default Navbar;