import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";

import { Divider, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import PercsPrimaryTheme from "../styles/PercsPrimaryTheme";
import quotesData from "../assets/data/coffeeQuotes.json"; // Import the quotes data
import WelcomeMessage from "../components/ui/WelcomeMessage";
import FetchVendorInfo from "../components/vendorTiles/FetchVendorInfo";
// import VendorCard from "../components/vendorTiles/VendorCard";

const HomePage = () => {
  // State for storing random quote

  const [randomQuote, setRandomQuote] = useState("");

  useEffect(() => {


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
        <WelcomeMessage randomQuote={randomQuote} />


        <Box>
          <Divider style={{ margin: "20px 0" }} />
          <Typography
            variant="h6"
            component="h3"
            gutterBottom
            style={{ marginTop: "8x" }}
          >
            Subscribed Vendors
          </Typography>
          {/* <VendorCard /> */}
          <FetchVendorInfo></FetchVendorInfo>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default HomePage;
