import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Divider, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import PercsPrimaryTheme from "../styles/PercsPrimaryTheme";
import quotesData from "../assets/data/coffeeQuotes.json"; // Import the quotes data
import WelcomeMessage from "../components/ui/WelcomeMessage";
import VendorStamps from "../components/vendorTiles/VendorStamps";


const HomePage = () => {
  // State for storing the username and a random quote
  const [username, setUsername] = useState("");
  const [randomQuote, setRandomQuote] = useState("");

  useEffect(() => {
    // TODO: Fetch the username from the server
    setUsername("Ethan");

    // Get a random quote from the quotes data
    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotesData.length);
      return quotesData[randomIndex].quote;
    };

    // Set the random quote
    setRandomQuote(getRandomQuote());
  }, []);

  return (
    <ThemeProvider theme={PercsPrimaryTheme}>
      <Container maxWidth="md">
        {/* Use WelcomeMessage component */}
        <WelcomeMessage username={username} randomQuote={randomQuote} />

        <Box>
          <Divider style={{ margin: "20px 0" }} />
          <Typography
            variant="h6"
            component="h3"
            gutterBottom
            style={{ marginTop: "8x" }}
          >
            Favourites
          </Typography>
          
          <VendorStamps
              title="Chur Bae"
              initialFavorite={true}
              initialSubscribed={true}
              circleColour={"primary"}
            />
            


        </Box>
        <Box>
          
          <Divider style={{ margin: "20px 0" }} />
          <Typography
            variant="h6"
            component="h3"
            gutterBottom
            style={{ marginTop: "8x" }}
          >
            Subscribed
          </Typography>
          <Grid container xs={12}>  
          <Grid xs={4}>
            <VendorStamps
              title="All Press Espresso"
              initialFavorite={false}
              initialSubscribed={true}
              circleColour={"primary"}
            />
            </Grid>
          <Grid xs={4}>
            <VendorStamps
              title="All Press Espresso"
              initialFavorite={false}
              initialSubscribed={true}
              circleColour={"primary"}
            />
            </Grid>
          <Grid xs={4}>
            <VendorStamps
              title="All Press Espresso"
              initialFavorite={false}
              initialSubscribed={true}
              circleColour={"primary"}
            />
            </Grid>
            </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default HomePage;
