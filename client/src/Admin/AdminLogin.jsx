import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function AdminLogin() {
    const [value,setValue] = useState({
        email:"",
        password:""
      })
      const handleChange =  (e)=>{
        e.preventDefault()
        const {name,value} = e.target;
        setValue((prev)=>({...prev,[name]:value}))
      }
      const navigate = useNavigate();
      axios.defaults.withCredentials = true;
      const [error,setError] = useState(null);
      const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:8800/adminLogin',value)
        .then(result => {
          if(result.data.loginStatus){
            navigate('/dashboard');
          }else{
            setError(result.data.Error);
          }
        })
        .catch(error => console.log(error))
      }
  return (
    <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md p-8 space-y-4 bg-white rounded shadow-md">
                {error && <div className="text-red-500">{error}</div>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <h1 className="text-2xl font-bold text-center">Admin Login</h1>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="font-bold">Email:</label>
                        <input type="email" name="email" value={value.email} autoComplete="off" placeholder="Enter your email" onChange={handleChange} className="p-2 mt-1 border border-gray-300 rounded"/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="font-bold">Password:</label>
                        <input type="password" name="password" value={value.password} autoComplete="off" placeholder="Enter your password" onChange={handleChange} className="p-2 mt-1 border border-gray-300 rounded"/>
                    </div>
                    <div className="flex justify-center">
                      <button type="submit" className="p-2 text-white bg-blue-500 rounded hover:text-xl">Submit</button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default AdminLogin
