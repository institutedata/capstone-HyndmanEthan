import { useState } from "react";
import { CardHeader, CardContent, Grid, Paper } from "@mui/material";
import SubscribeButton from "../buttons/SubscribeButton";
import FavoriteButton from "../buttons/FavouriteButton";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";

const VendorStamps = ({ title, initialFavorite, initialSubscribed, circleColour }) => {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);
  const [isSubscribed, setIsSubscribed] = useState(initialSubscribed);

  const handleToggleFavorite = (newFavorite) => {
    setIsFavorite(newFavorite); // Update favorite state in parent component
  };

  const handleToggleSubscribe = (newSubscribed) => {
    setIsSubscribed(newSubscribed); // Update subscribed state in parent component
  };

  return (
    <Paper elevation={5} square={false} style={{}}>
      <CardHeader
        title={title}
        action={
            
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
        }
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid
            item
            xs={4}
            container
            justifyContent="center"
            alignItems="center"
          >
            <CircleRoundedIcon
              style={{ fontSize: 60, position: "relative" }}
              color={circleColour}
            />
            <DoneRoundedIcon
              style={{ fontSize: 40, position: "absolute" }}
              color="default"
            />
          </Grid>
          <Grid
            item
            xs={4}
            container
            justifyContent="center"
            alignItems="center"
          >
            <CircleRoundedIcon
              style={{ fontSize: 60, position: "relative" }}
              color={circleColour}
            />
            <DoneRoundedIcon
              style={{ fontSize: 40, position: "absolute" }}
              color="default"
            />
          </Grid>
          <Grid
            item
            xs={4}
            container
            justifyContent="center"
            alignItems="center"
          >
            <CircleRoundedIcon
              style={{ fontSize: 60, position: "relative" }}
              color={circleColour}
            />
            <DoneRoundedIcon
              style={{ fontSize: 40, position: "absolute" }}
              color="default"
            />
          </Grid>
          <Grid
            item
            xs={4}
            container
            justifyContent="center"
            alignItems="center"
          >
            <CircleRoundedIcon
              style={{ fontSize: 60, position: "relative" }}
              color={circleColour}
            />
            <DoneRoundedIcon
              style={{ fontSize: 40, position: "absolute" }}
              color="default"
            />
          </Grid>
          <Grid
            item
            xs={4}
            container
            justifyContent="center"
            alignItems="center"
          >
            <CircleRoundedIcon
              style={{ fontSize: 60, position: "relative" }}
              color={circleColour}
            />
            <DoneRoundedIcon
              style={{ fontSize: 40, position: "absolute" }}
              color="default"
            />
          </Grid>
          <Grid
            item
            xs={4}
            container
            justifyContent="center"
            alignItems="center"
          >
            <CircleRoundedIcon
              style={{ fontSize: 60, position: "relative" }}
              color={circleColour}
            />
            <DoneRoundedIcon
              style={{ fontSize: 40, position: "absolute" }}
              color="default"
            />
          </Grid>
          <Grid
            item
            xs={4}
            container
            justifyContent="center"
            alignItems="center"
          >
            <CircleRoundedIcon
              style={{ fontSize: 60, position: "relative" }}
              color={circleColour}
            />
            <DoneRoundedIcon
              style={{ fontSize: 40, position: "absolute" }}
              color="default"
            />
          </Grid>
          <Grid
            item
            xs={4}
            container
            justifyContent="center"
            alignItems="center"
          >
            <CircleRoundedIcon
              style={{ fontSize: 60, position: "relative" }}
              color={circleColour}
            />
            <DoneRoundedIcon
              style={{ fontSize: 40, position: "absolute" }}
              color="default"
            />
          </Grid>
          <Grid
            item
            xs={4}
            container
            justifyContent="center"
            alignItems="center"
          >
            <CircleRoundedIcon
              style={{ fontSize: 60, position: "relative" }}
              color={circleColour}
            />
            <DoneRoundedIcon
              style={{ fontSize: 40, position: "absolute" }}
              color="default"
            />
          </Grid>
          <Grid
            item
            xs={4}
            container
            justifyContent="center"
            alignItems="center"
          ></Grid>
          <Grid
            item
            xs={4}
            container
            justifyContent="center"
            alignItems="center"
          >
            <CircleRoundedIcon
              style={{ fontSize: 60, position: "relative" }}
              color={circleColour}
            />
          </Grid>
          <Grid
            item
            xs={4}
            container
            justifyContent="center"
            alignItems="center"
          ></Grid>
        </Grid>
      </CardContent>
    </Paper>
  );
};

export default VendorStamps;
