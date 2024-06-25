import React from 'react'
import { useNavigate } from 'react-router-dom'

function LoginAs() {
    const navigate = useNavigate();
    const handleAdmin = ()=>{
        navigate('/login');
    }
    const handleUser = ()=>{
        navigate('/login')
    }
  return (
    <div className='flex flex-row justify-center items-center w-full h-[750px] bg-red-400'>
        <div className='flex flex-col justify-center items-center  w-64 h-64'>
            <h1>Login As:</h1>
            <div className='b'>
                <button className='mr-5 mt-5 cursor-pointer hover:bg-green-600 p-4 rounded-xl' onClick={handleUser}>User</button>
                <button className='mrl-5 mt-5 cursor-pointer hover:bg-green-600 p-4 rounded-xl' onClick={handleAdmin}>Admin</button>
            </div>
        </div>
    </div>
  )
}

export default LoginAs
