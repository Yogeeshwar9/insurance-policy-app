import axios from 'axios';
import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleSubmit = ()=>{
    localStorage.removeItem('user');
    axios.get('http://localhost:8800/logout').then((result)=>{
      if(result.data.status){
        navigate('/login')
      }
    }).catch((error)=>(console.log(error)))
  }
  return (
    <div className='w-full h-14 bg-slate-600  text-white flex flex-row justify-between content-center px-3 md:px-5 items-center list-none'>
        <div className='cursor-pointer text-2xl  hover:text-red-600'><li>Gradious</li></div>
        <div className='flex flex-row flex-start '>
            <li className='mx-[5px] cursor-pointer mr-9 text-2xl hover:text-red-600'>
              <NavLink className={({isActive})=>`${isActive? "text-red-600":"text-white"}`} to={`/home`}>Home</NavLink>
            </li>
            <li className='mx-[5px] cursor-pointer mr-9 text-2xl hover:text-red-600'>
              <Link to='/mypolicy'>My Policy</Link>
            </li>
            <li className='mx-[5px] cursor-pointer mr-9 text-2xl hover:text-red-600'>
              <NavLink to={`/about`}>About</NavLink>
            </li>
            <li className='mx-[5px] cursor-pointer text-2xl hover:text-red-600'>
              <NavLink to={`/contact`}>Contact</NavLink>
            </li>
        </div>
        <div className='flex flex-row '>
            <li className='mx-[5px] cursor-pointer text-2xl hover:text-red-600'><Link to='/profile'>Profile</Link></li>
            <li className='mx-[5px] cursor-pointer text-2xl hover:text-red-600'><button onClick={handleSubmit}>Logout</button> </li>
        </div>
    </div>
  )
}

export default Navbar
