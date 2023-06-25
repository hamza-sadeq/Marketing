import { Container, Box, Typography, Grid } from "@mui/material";
import React from "react";
import { founders } from "./Utils/Constants";

const Companies = () => {
  return (
    <div className="companiesPage">
      <Container>
        <Box
          textAlign={"center"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography
            color={"#fff"}
            padding={"15px"}
            sx={{
              width: { md: "80%", xs: "100%" },
              fontSize: { md: "35px", xs: "17px" },
            }}
          >
            Aklima The standard chunk of Lorem Ipsum used since the 1500s is
            reproduced below for those interested. Sections Bonorum et Malorum
            original.
          </Typography>
          <Typography padding={"40px 0"} color={"#fff"} fontSize={"18px"}>
            <span style={{ color: "#c6c9d8" }}>AKLIMA</span> - COO, AMERIMAR
            ENTERPRISES, INC.
          </Typography>
          <Grid Container width={"45%"}>
            {founders.map((item, i) => (
              <Grid
                item
                xs={2.4}
                flexBasis={"20%"}
                display={"inline-block"}
                margin={"10px"}
              >
                <img
                  src={item.img}
                  style={{
                    borderRadius: "10px",
                    cursor: 'pointer',
                    transition: 'all .4s ease'
                  }}
                  className="founders"
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Companies;
