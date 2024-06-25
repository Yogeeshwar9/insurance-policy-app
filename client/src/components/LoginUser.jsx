import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



function LoginUser() {
    const [user,setUser] = useState({
        email:'',
        password:''
    });
    const navigate = useNavigate();
    const handleNewUser = (e)=>{
      e.preventDefault();
      navigate('/adduser')
    }
    const handleChange = (e)=>{
        e.preventDefault();
        const {name,value} = e.target;
        setUser((prev)=>({...prev,[name]:value}))
    }
    const [error,setError] = useState(null);
    axios.defaults.withCredentials=true;
    const handleSubmit = (e)=>{
      e.preventDefault();
        axios.post('http://localhost:8800/userlogin',user).then((result)=>{
          if(result.data.status){
            console.log("login",result.data);
            localStorage.setItem('user', JSON.stringify(result.data.details)); // Store user details in localStorage
            navigate('/home')
          }
          else{
            setError(result.data.Error);
          }
        })
        .catch(error=>{
          setError('Something went wrong. Please try again.'); 
          console.log(error);
      })
    }
  return (
    <div className="flex flex-col items-center pt-[15%]">
            <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
                <h1 className="text-xl">User Login</h1>
                <div className="flex flex-col items-start">
                    <label className="font-bold">Email</label>
                    <input type="email" autoComplete="off" name="email" value={user.email} onChange={handleChange} placeholder="Mail" className="border border-gray-300 p-2 mt-1 w-64" />
                </div>
                <div className="flex flex-col items-start">
                    <label className="font-bold">Password</label>
                    <input type="password" autoComplete="off" name="password" value={user.password} onChange={handleChange} placeholder="Password" className="border border-gray-300 p-2 mt-1 w-64" />
                </div>
                <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded hover:text-xl">Submit</button>
            </form>
            <h1 className="mt-4">{error && <p className="text-red-500">{error}</p>}</h1>
            <button onClick={handleNewUser} className="mt-4 text-blue-500 hover:text-xl">If new user? <span className="text-red-800">SignUp</span></button>
        </div>
  )
}

export default LoginUser

