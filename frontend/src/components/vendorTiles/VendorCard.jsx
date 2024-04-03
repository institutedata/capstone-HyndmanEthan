import React from "react";
import { Paper, CardActionArea, CardMedia, CardHeader, CardContent, CardActions } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SubscribeButton from "../buttons/SubscribeButton";

const VendorCard = ({ card }) => {
  return (
    
      <Paper elevation={12} square={false} style={{ width: "90%", margin: 10 }}>
        <CardActionArea style={{ display: "flex", flexDirection: "column" }}>
          <CardMedia
            component="img"
            sx={{ width: "100%", maxHeight: 200, objectFit: "contain" }}
            image={card.logo}
            alt={card.title}
          />
          <CardHeader title={card.title} subheader={card.address} />
          <CardContent>
            <Typography variant="body1" color="text.primary">
              {card.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <a href={card.link} target="_blank" rel="noopener noreferrer">
            <Button size="small" component="span">
              Visit Website
            </Button>
          </a>
          <SubscribeButton />
        </CardActions>
      </Paper>
    
  );
};

export default VendorCard;
