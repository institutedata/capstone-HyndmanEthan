import GLOBAL from "../../config/global";
import { useState } from "react";
import useDataFetcher from "../../utils/useDataFetcher"; // Import fetcher
import {
  CardHeader,
  CardContent,
  CardMedia,
  Paper,
  CardActions,
  CardActionArea,
} from "@mui/material";
import SubscribeButton from "../buttons/SubscribeButton";
import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";


const VendorInfoCard = () => {


  const {
    loading,
    data: cards,
    error,
  } = useDataFetcher(`${GLOBAL.SERVER_URL}/cards/`);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {cards.data.map((card) => (
        <div key={card._id}>


          <Paper elevation={12} square={false} style={{ width: "90%",  margin: 10  }}>
            <CardActionArea style={{display:"flex", flexDirection:"column" }}>
            <CardMedia
              component="img"
              sx={{ width: "100%", maxHeight: 200, objectFit: "contain"}}
              image={card.logo}
              alt={card.title}
            />
            <CardHeader
              title={card.title}
                subheader={card.address}
            />
            <CardContent>


              <Typography variant="body1" color="text.primary">
                {card.description}
              </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions >

            <a href={card.link} target="_blank" rel="noopener noreferrer">
      <Button size="small" component="span">Visit Website</Button>
    </a>

    <SubscribeButton
                  />
            </CardActions>
          </Paper>
        </div>
      ))}
    </div>
  );
};

export default VendorInfoCard;
