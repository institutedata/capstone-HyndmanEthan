import React, { useState } from "react";
import { AdvancedMarker, Pin } from "@vis.gl/react-google-maps";
import { Modal, Backdrop, Fade, Paper, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import FavouriteButton from "../buttons/FavouriteButton";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import GLOBAL from "../../config/global";
import useDataFetcher from "../../utils/useDataFetcher"; // Import fetcher
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
};

const MapPins = ({ pins: propPins, cards: propCards }) => {
  const [selectedPin, setSelectedPin] = useState(null);

  console.log("propPins:", propPins);
  console.log("propCards:", propCards);




  
  const handlePinClick = (pin) => {
    if (selectedPin === pin) {
      // If the clicked pin is already selected, deselect it
      setSelectedPin(null);
    } else {
      // Otherwise, select the clicked pin
      setSelectedPin(pin);
    }
  };

  // Function to find the card associated with a pin
  const findCardForPin = (pin) => {
    return propCards.find((card) => card._id === pin.card);
  };

  return (
    <>
      {propPins.map((pin) => (
        <React.Fragment key={pin._id}>
          <AdvancedMarker
            title={pin.vendorName}
            position={{ lat: pin.lat, lng: pin.lng }}
            onClick={() => handlePinClick(pin)}
          >
            <Pin background={"#FBBC04"} glyphColor={"#000"} borderColor={"#000"} />
          </AdvancedMarker>
          <Modal
            open={selectedPin === pin}
            onClose={() => setSelectedPin(null)}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={selectedPin === pin}>

                {/* Render card details */}
                {findCardForPin(pin) && (
                  <Box sx={style}>
                  <Paper
                    elevation={12}
                    square={false}
                    style={{ width: "90%", margin: 10 }}
                  >
                    <CardActionArea
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          width: "100%",
                          maxHeight: 200,
                          objectFit: "contain",
                          margin: 4,
                          padding: 3
                        }}
                        image={findCardForPin(pin).logo}
                        alt={findCardForPin(pin).title}
                      />
                      <CardHeader title={findCardForPin(pin).title} subheader={findCardForPin(pin).address} />
                      <CardContent>
                        <Typography variant="body1" color="text.primary">
                          {findCardForPin(pin).description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <a
                        href={findCardForPin(pin).link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="small" component="span">
                          Visit Website
                        </Button>
                      </a>
                      <FavouriteButton />
                    </CardActions>
                  </Paper>
                  </Box>
                )}
              
            </Fade>
          </Modal>
        </React.Fragment>
      ))}
    </>
  );
};

const PinComponent = () => {
  const { loading: loadingPins, data: pins, error: errorPins } = useDataFetcher(`${GLOBAL.SERVER_URL}/pins/`);
  const { loading: loadingCards, data: cards, error: errorCards } = useDataFetcher(`${GLOBAL.SERVER_URL}/cards/`);

  if (loadingPins || loadingCards) {
    return <div>Loading...</div>;
  }

  if (errorPins || errorCards) {
    return <div>Error: {errorPins || errorCards}</div>;
  }

  return <MapPins pins={pins.data} cards={cards.data} />;
};

export default PinComponent;
