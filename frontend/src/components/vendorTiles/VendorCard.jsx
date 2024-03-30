import {useState} from "react";
import Divider from "@mui/material/Divider";
import { Card, Typography, Box } from "@mui/material";
import FavoriteButton from "../buttons/FavouriteButton";
import SubscribeButton from "../buttons/SubscribeButton";

const VendorCard = ({ title, initialFavorite, initialSubscribed }) => {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);
  const [isSubscribed, setIsSubscribed] = useState(initialSubscribed);

  const handleToggleFavorite = (newFavorite) => {
    setIsFavorite(newFavorite); // Update favorite state in parent component
  };

  const handleToggleSubscribe = (newSubscribed) => {
    setIsSubscribed(newSubscribed); // Update subscribed state in parent component
  };
  return (
    <>
      <Card style={{width: "100%", height: "100%" }}>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            component="h3"
            gutterBottom
            style={{ marginTop: "12px", marginLeft: "12px" }}
          >
            {title}
          </Typography>
          <div>
            <FavoriteButton
              isFavorite={isFavorite}
              onToggle={handleToggleFavorite}
            />
            <SubscribeButton
              isSubscribed={isSubscribed}
              onToggle={handleToggleSubscribe}
            />
          </div>
        </Box>
      </Card>
      <Divider />
    </>
  );
};

export default VendorCard;
