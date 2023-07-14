import { Container, Box, Typography, Grid } from "@mui/material";
import React from "react";
import { ourWorks } from "./Utils/Constants";
import "../App.css";

const Works = () => {
  return (
    <div className="worksPage">
      <Container>
        <Box
          paddingTop={"50px"}
          textAlign={"center"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography
            color={"#fff"}
            fontWeight={"700"}
            sx={{
              fontSize: { md: "60px", xs: "35px" },
            }}
          >
            Our Works
          </Typography>
          <Typography
            color={"#fff"}
            padding={"15px"}
            sx={{
              width: { md: "60%", xs: "90%" },
              fontSize: { md: "18px", xs: "16px" },
            }}
          >
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </Typography>
        </Box>
        <Grid container gap={"30px"}>
          {ourWorks.map((item, i) => (
            <Grid
              className="content"
              item
              lg={3.7}
              sm={5.7}
              xs={12}
              key={item.id}
              sx={{
                backgroundImage: `url(${item.image})`,
                minHeight: "70vh",
                backgroundRepeat: "no-repeat",
                borderRadius: "20px",
                backgroundBlendMode: "darken",
                position: "relative",
                backgroundSize: "cover",
                transition: "all .4s ease",
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <div className="gradient">
                  <Box position={"absolute"} bottom={"20%"} left={"10%"}>
                    <Typography
                      color={"#c6c9d8"}
                      fontSize={"14px"}
                      fontWeight={"bold"}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      color={"#fff"}
                      variant="h5"
                      fontWeight={"600"}
                      padding={"20px 0"}
                    >
                      {item.Details}
                    </Typography>
                    <div style={{ paddingTop: "20px" }}>
                      <a href="#" className="caseStudy">
                        Case Study
                      </a>
                    </div>
                  </Box>
                </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Works;
