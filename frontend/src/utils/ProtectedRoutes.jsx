// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from './UserContext';

const ProtectedRoutes = ({ redirectPath = '/signin', children }) => {
  const { currentUser } = useUserContext();

  if (!currentUser.username) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : null;
};

export default ProtectedRoutes;
