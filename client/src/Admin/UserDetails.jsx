import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function UserDetails() {
    const [policies, setPolicies] = useState([]);

  useEffect(() => {
    const fetchAllPolicy = async () => {
      try {
        const res = await axios.get('http://localhost:8800/policy',{
          withCredentials: true 
        });
        console.log(res);
        setPolicies(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllPolicy();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/deletepolicy/${id}`,{
        withCredentials: true 
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
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
                    <th>Actions</th>
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
                    <td>
                        <button className='update ml-2 rounded-xl p-1 bg-green-600'><Link to={`/update/${policy.id}`}>Update</Link></button>
                        <button className='delete mr-2 ml-5 rounded-xl p-1 bg-red-600' onClick={() => handleDelete(policy.id)}>Delete</button>
                    </td>
                    </tr>
                ))}
            </tbody>
      </table>
    </div>
  )
}

export default UserDetails
