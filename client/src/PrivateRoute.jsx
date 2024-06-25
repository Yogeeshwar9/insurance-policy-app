import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Cookies from 'js-cookie'
function PrivateRoute() {
  
  const isAuthenticated = !!Cookies.get('token');

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute