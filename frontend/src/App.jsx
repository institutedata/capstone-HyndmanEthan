// npm create vite@latest
// npm i
// npm i "@vis.gl/react-google-maps"
// npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/icons-material
// npm install react-router-dom
// npm run dev

"use client";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import MapPage from "./pages/MapPage";
import LoadingPage from "./pages/LoadingPage";
import UserSignIn from "./pages/UserSignInPage";
import UserSignUp from "./pages/UserSignUpPage";
import VendorPage from "./pages/VendorPage";
import BottomNavBarRoutes from "./components/ui/BottomNavBarRoutes";
import TopNavBarRoutes from "./components/ui/TopNavBarRoutes";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";



const App = () => (

  
  
  
  <Router>
    <div>
      <TopNavBarRoutes allowedPaths={['/home', '/vendors', '/freebies' ]}/>
    <Routes>
    <Route path="/" element={<LoadingPage to="/signin" delay={2500} />} />
      <Route path="/signup" element={<UserSignUp />} />
      <Route path="/signin" element={<UserSignIn />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/vendors" element={<VendorPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    <BottomNavBarRoutes allowedPaths={['/home', '/map', '/vendors', '/freebies' ]} />
    </div>
  </Router>
)

export default App;


