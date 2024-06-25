import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function UserProfile() {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:8800/userdetails');
        console.log(res.data);
        setUser(res.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        {user && user.map((u, id) => (
          <div key={id} className="mb-4">
            <h3>First Name: {u.fname}</h3>
            <h3>Last Name: {u.lname}</h3>
            <h3>Email: {u.email}</h3>
            <button className="mt-2">
              <Link to="/updatePassword" className="text-blue-500">Reset Password</Link>
            </button>
          </div>
        ))}
        <button onClick={handleClick} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Return to Home</button>
      </div>
    </div>
  );
}

export default UserProfile;
