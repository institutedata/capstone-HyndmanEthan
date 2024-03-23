
import { useLocation } from 'react-router-dom';
import TopNavBar from './TopNavBar';

const TopNavBarRoutes = ({ allowedPaths }) => {
    const location = useLocation();
    const shouldRenderTopNavBar = allowedPaths.includes(location.pathname);
  
    return shouldRenderTopNavBar ? <TopNavBar /> : null;
  };
  


export default TopNavBarRoutes;
