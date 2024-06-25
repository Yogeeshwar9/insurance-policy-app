import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
    const [policies, setPolicies] = useState({
        policy_Number:'',
        insured_party:"",
        coverage_type:"",
        start_date:new Date().toISOString().split('T')[0],
        end_date:new Date().toISOString().split('T')[0],
        premium_amount:''
        })
        const navigate = useNavigate()
    
        const handleChange = (e) => {
          e.preventDefault();
          const { name, value } = e.target;
          setPolicies((prev) => ({
            ...prev,
            [name]: value,
          }));
        };
        axios.defaults.withCredentials = true;
        const handleClick = async (e)=>{
          e.preventDefault();
          try {
              await axios.post('http://localhost:8800/insertpolicy/',policies)
              navigate('/home')
          } catch (error) {
              console.log(error);
          }
        }
  return (
    <div className='max-w-md mx-auto p-4'>
      <h1 className='text-xl mt-3 mb-3'>Add The User details</h1>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-row items-center'>
          <label htmlFor='policy_Number' className='w-36'><strong>Policy Number</strong></label>
          <input type='number' placeholder='Policy Number' value={policies.policy_Number} onChange={handleChange} name='policy_Number' className='flex-grow p-2 border border-gray-300 rounded-md'/>
        </div>
        <div className='flex flex-row items-center'>
          <label htmlFor='insured_party' className='w-36'><strong>Name</strong></label>
          <input type='text' placeholder='Insured Party' value={policies.insured_party} onChange={handleChange} name='insured_party' className='flex-grow p-2 border border-gray-300 rounded-md'/>
        </div>
        <div className='flex flex-row items-center'>
          <label htmlFor='coverage_type' className='w-36'><strong>Coverage Type</strong></label>
          <input type='text' placeholder='Coverage Type' value={policies.coverage_type} onChange={handleChange} name='coverage_type' className='flex-grow p-2 border border-gray-300 rounded-md'/>
        </div>
        <div className='flex flex-row items-center'>
          <label htmlFor='start_date' className='w-36'><strong>Start Date</strong></label>
          <input type='date' placeholder='Start Date' value={policies.start_date} onChange={handleChange} name='start_date' className='flex-grow p-2 border border-gray-300 rounded-md'/>
        </div>
        <div className='flex flex-row items-center'>
          <label htmlFor='end_date' className='w-36'><strong>End Date</strong></label>
          <input type='date' placeholder='End Date' value={policies.end_date} onChange={handleChange} name='end_date' className='flex-grow p-2 border border-gray-300 rounded-md'/>
        </div>
        <div className='flex flex-row items-center'>
          <label htmlFor='premium_amount' className='w-36'><strong> Premium Amount</strong></label>
          <input type='number' placeholder='Premium Amount' value={policies.premium_amount} onChange={handleChange} name='premium_amount' className='flex-grow p-2 border border-gray-300 rounded-md'/>
        </div>
        <button className='bg-orange-600 text-white w-full p-2 mt-3 rounded-md hover:text-xl' onClick={handleClick}>Continue</button>
        <p className='text-sm text-center'>By clicking on "Continue", you agree to our Privacy Policy, Terms of Use & Disclaimer</p>
      </div>
    </div>
  )
}

export default RegisterForm
