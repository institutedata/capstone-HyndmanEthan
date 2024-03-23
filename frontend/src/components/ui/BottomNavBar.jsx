import {useState} from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import StorefrontIcon from "@mui/icons-material/Storefront";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { useNavigate } from "react-router-dom";

export default function BottomNavBar() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Home"
          onClick={() => navigate("/home")}
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          label="Maps"
          onClick={() => navigate("/map")}
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          label="Vendors"
          onClick={() => navigate("/vendors")}
          icon={<StorefrontIcon />}
        />
        <BottomNavigationAction
          label="Freebies"
          onClick={() => navigate("/freebies")}
          icon={<CardGiftcardIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
