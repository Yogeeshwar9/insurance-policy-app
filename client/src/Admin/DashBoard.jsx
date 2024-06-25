import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import  axios from 'axios'

function DashBoard() {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleSubmit = ()=>{
    axios.get('http://localhost:8800/logout').then((result)=>{
      if(result.data.status){
        navigate('/login')
      }
    }).catch((error)=>(console.log(error)))
  }
  const handleUsers = ()=>{
    navigate('/dashboard/userdetails')
  }
  return (
    <div className='adminBtn text-center'>
      <p>
        <button onClick={handleSubmit} className='lbtn mr-2 ml-5 rounded-xl p-3 bg-red-600' >Logout</button>
        <button onClick={handleUsers} className='ubtn ml-2 rounded-xl p-3 bg-green-600'>Get User details</button>
        <button className='ml-2 mr-2 rounded-xl p-3 bg-orange-600'>Notify</button>
      </p>
    </div>
  )
}
export default DashBoard
