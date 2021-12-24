import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Copyright from "../components/Copyright";
import CryptoButton from "../components/CryptoButton";

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          JA WENO LA VLOCCHAIN
        </Typography>
        <CryptoButton variant="contained" />
        <CryptoButton variant="contained" color="error" />
        <CryptoButton variant="outlined" />
        <CryptoButton variant="text" />
        <Copyright />
      </Box>
    </Container>
  );
};

export default Home;
