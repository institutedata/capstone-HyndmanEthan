
import { useLocation } from 'react-router-dom';
import BottomNavBar from './BottomNavBar';

const BottomNavBarRoutes = ({ allowedPaths }) => {
  const location = useLocation();
  const shouldRenderBottomNavBar = allowedPaths.includes(location.pathname);

  return shouldRenderBottomNavBar ? <BottomNavBar /> : null;
};

export default BottomNavBarRoutes;
