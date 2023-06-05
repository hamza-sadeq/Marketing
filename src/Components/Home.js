import React from "react";
import Navbar from "./Navbar";
import { Box, Container, Typography } from "@mui/material";

const Home = () => {
  return (
    <div className="homeSection">
      <Navbar />
      <Container>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          textAlign={"center"}
          padding={"150px 0"}
        >
          <Typography
            className="Marketing"
            sx={{
              fontWeight: { md: "1000",sm: '800', xs: "700" },
              fontSize: { md: "96px", sm: '60px' , xs: "40px" },
            }}
          >
            Marketing
          </Typography>
          <Typography width={'90%'} letterSpacing={'1px'} color={"#c6c9d8"}
          sx={{
            fontSize: {md: '25px' , xs: '18px'}
          }}>
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration.
          </Typography>
          <div className="ContactButton">
            <a href='#'>
              Contact Us
            </a>
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
