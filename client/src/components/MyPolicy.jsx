import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function MyPolicy() {
    const [policies, setPolicies] = useState([]);
    const handlePolicy = async (e) => {
        try {
          e.preventDefault();
          const response = await axios.get('http://localhost:8800/userPolicies', {
            withCredentials: true, // Ensure credentials are sent
            headers: {
              'Content-Type': 'application/json',
            },
          });
          setPolicies(response.data); 
        } catch (error) {
          console.error('Error fetching policies:', error);
        }
      };
  return (
    <div>
        <div className='flex flex-col'>
            <div className='w-full h-20 bg-blue-200 flex flex-row justify-between items-center'>
                <div className='ml-40'><Link to={`/home`}>Grdaious</Link></div>
                <div className='mr-36'>
                    <button className='border-2 border-blue-700 mr-5 p-1 pl-3 pr-3 rounded-md'>Claim Assistance</button>
                    <button className='border-2 border-blue-700 mr-5 p-1 pl-3 pr-3 rounded-md'>Talk to Expert</button>
                </div>
            </div>
            <div>
                <table className='policys'>
                    <thead>
                        <tr>
                            <th>Policy Number</th>
                            <th>Insured Party</th>
                            <th>Coverage Type</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Premium Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {policies && policies.map((policy, id) => (
                            <tr className='policy' key={id}>
                            <td>{policy.policy_Number}</td>
                            <td>{policy.insured_party}</td>
                            <td>{policy.coverage_type}</td>
                            <td>{policy.start_date}</td>
                            <td>{policy.end_date}</td>
                            <td>{policy.premium_amount}</td>
                            <td>{policy.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='w-full flex justify-center items-center mt-5'>
                <div>
                    <button className='bg-blue-500 p-3 rounded-xl' onClick={handlePolicy}>Get My Policies</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyPolicy
