import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const isAuthenticated=sessionStorage.getItem('isAuthenticated')
  return isAuthenticated ? children : <Navigate to="/adminsignin" replace/>
}

export default ProtectedRoute