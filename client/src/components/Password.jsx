import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Password() {
    const [data, setData] = useState({
        password: ""
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setData({ ...data, password: e.target.value });
    };
    axios.defaults.withCredentials = true;
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put("http://localhost:8800/updatePassword", data);
            if(res.data.message){
                navigate('/home')
            }
            
        } catch (error) {
            console.error("Error submitting password:", error);
        }
    };
  return (
    <div>
      <form onSubmit={handleSubmit}>
                <label htmlFor='password'>Password</label>
                <input 
                    type='password' 
                    name='password' 
                    autoComplete='off' 
                    value={data.password} 
                    onChange={handleChange} 
                />
                <br/>
                <button type="submit">Submit</button>
            </form>
    </div>
  )
}

export default Password

