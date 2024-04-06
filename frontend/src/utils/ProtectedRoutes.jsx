// ProtectedRoute.js
// * Protected routes not implemented as context isn't being held locally so is lost on refresh
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from './userContext';

const ProtectedRoutes = ({ redirectPath = '/signin', children }) => {
  const { user } = useContext(UserContext);

  if (!user.id) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : null;
};

export default ProtectedRoutes;
