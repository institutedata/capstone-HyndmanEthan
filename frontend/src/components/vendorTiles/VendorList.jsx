// creation of list in vendor page, with the ability to click on a vendor and see more information about them
//  TODO: break this, vendor stamps and the maps pin modal into smaller reusable components
import { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";
import { Card, Typography, Box } from "@mui/material";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CardActionArea from "@mui/material/CardActionArea";
import GLOBAL from "../../config/global";
import axios from "axios";
import {
  Paper,
  CardMedia,
  CardHeader,
  CardContent,
  CardActions,
} from "@mui/material";
import Button from "@mui/material/Button";
import FavouriteButton from "../buttons/FavouriteButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
};

const VendorList = ({ title, initialSubscribed }) => {
  const [selectedCard, setSelectedCard] = useState(null); // State to track the selected card
  const [open, setOpen] = React.useState(false);
  const [cards, setCards] = useState([]); // State to store fetched cards

  const handleOpen = (card) => {
    setSelectedCard(card);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCard(null);
  };

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get(`${GLOBAL.SERVER_URL}/cards/`);
        setCards(response.data.data); // Update state with fetched data
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {cards.map((card) => (
        <div key={card._id}>
          <Card style={{ width: "100%", height: "100%" }}>
            <CardActionArea onClick={() => handleOpen(card)}>
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
                  {card.title}
                </Typography>
              </Box>
            </CardActionArea>
          </Card>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open && selectedCard === card} // Open modal only for the selected card
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={open && selectedCard === card}>
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
                        margin: 2,
                      }}
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
                    <a
                      href={card.link}
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
            </Fade>
          </Modal>
          <Divider />
        </div>
      ))}
    </>
  );
};

export default VendorList;
