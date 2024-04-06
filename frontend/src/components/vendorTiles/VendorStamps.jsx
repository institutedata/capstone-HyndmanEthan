import React, { useState } from "react";
import GLOBAL from "../../config/global";
import useDataFetcher from "../../utils/useDataFetcher"; // Import fetcher
import {
  CardHeader,
  CardContent,
  CardMedia,
  Paper,
  CardActions,
  CardActionArea,
  Modal,
  Box,
} from "@mui/material";

import FavouriteButton from "../buttons/FavouriteButton";
import Typography from "@mui/material/Typography";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import { Grid } from "@mui/material";

import Button from "@mui/material/Button";

const VendorCard = ({ card }) => {
  const [iconCount, setIconCount] = useState(5); // Initial count of icons
  const [openModal, setOpenModal] = useState(false); // State for controlling modal visibility
  const [tokenCount, setTokenCount] = useState(0); // State for token count

  // Function to increase the stamp count
  const increaseIconCount = () => {
    if (iconCount >= 9) {
      // Reset count to 0 if it reaches 9 and increment token count
      setIconCount(0);
      setTokenCount(tokenCount + 1);
    } else {
      // Increment count if it's less than 9
      setIconCount(iconCount + 1);
    }
  };

  // Function to decrease the stamp count
  const decreaseIconCount = () => {
    if (iconCount > 0) {
      // Decrease count if it's greater than 0
      setIconCount(iconCount - 1);
    }
  };
  // Function to decrease the stamp count
  const decreaseTokenCount = () => {
    if (tokenCount > 0) {
      // Decrease count if it's greater than 0
      setTokenCount(tokenCount - 1);
    }
  };

  // Function to open the modal
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div key={card._id}>
      {/* Vendor Card */}
      <Paper elevation={12} square={false} style={{ width: "90%", margin: 10 }}>
        {/* Card content */}
        <CardActionArea style={{ display: "flex", flexDirection: "column" }}>
          {/* Vendor logo */}
          <CardMedia
            component="img"
            sx={{
              width: "100%",
              maxHeight: 200,
              objectFit: "contain",
              margin: 2,
            }}
            image={card.logo}
            alt={card.title}
          />
          {/* Vendor title */}
          <CardHeader title={card.title} />
          {/* Stamps */}
          <CardContent>
            <Grid container spacing={2}>
              {[...Array(iconCount)].map((_, index) => (
                <Grid
                  key={index}
                  item
                  xs={4}
                  container
                  justifyContent="center"
                  alignItems="center"
                >
                  <CircleRoundedIcon
                    style={{ fontSize: 60, position: "relative" }}
                    color="primary"
                  />
                  <DoneRoundedIcon
                    style={{ fontSize: 40, position: "absolute" }}
                    color="default"
                  />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </CardActionArea>
        {/* Card actions */}
        <CardActions>
          {/* Favorite button */}
          <FavouriteButton isFavorite={true} />
          {/* Button to add stamp */}
          <Button color="secondary" onClick={increaseIconCount}>
            Add Stamp
          </Button>
          {/* Button to remove stamp */}
          <Button color="secondary" onClick={decreaseIconCount}>
            Remove stamp
          </Button>
          {/* Button to view tokens */}
          <Button color="secondary" onClick={handleOpenModal}>
            View tokens
          </Button>
        </CardActions>
      </Paper>
      {/* Modal for viewing tokens */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          {/* Vendor logo */}
          <CardMedia
            component="img"
            sx={{
              width: "100%",
              maxHeight: 200,
              objectFit: "contain",
              margin: 2,
            }}
            image={card.logo}
            alt={card.title}
          />
          {/* Vendor title */}
          <CardHeader title={card.title} />
          {/* Token count */}
          <Typography variant="h6" component="h3" style={{ textAlign: "center" }}>
            You have earned: {tokenCount} tokens.
          </Typography>
          <Button color="secondary" onClick={decreaseTokenCount}>
            Redeem Token
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

const FetchVendorInfo = () => {
  // Fetch vendor data
  const { loading, data: cards, error } = useDataFetcher(
    `${GLOBAL.SERVER_URL}/cards/`
  );

  // Display loading message while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  // Display error message if data fetching fails
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Display vendor cards
  return (
    <div>
      {cards.data.map((card) => (
        <VendorCard key={card._id} card={card} />
      ))}
    </div>
  );
};

export default FetchVendorInfo;
