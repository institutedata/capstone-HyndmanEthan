import { useEffect } from "react";
import Percs from "../assets/img/LoadPage.svg";
import CircularProgress from '@mui/material/CircularProgress';

const LoadingPage = ({ to, delay }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = to;
    }, delay);

    return () => clearTimeout(timer);
  }, [to, delay]);

  return  (
    <div style={{ height: "100vh", width: "100vw", background: "#7F5744", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{zIndex: 2}}>

      <CircularProgress />
      </div>
      <img style={{ position: "absolute", zIndex: 1 }} src={Percs} alt="" />
    </div>
  );  
};

export default LoadingPage;
