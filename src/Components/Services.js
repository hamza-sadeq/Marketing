import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { servicesBox } from "./Utils/Constants";

const About = () => {
  return (
    <div className="servicePage" style={{
      paddingBottom: '50px'
    }}>
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
            Our Services
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
        <Grid container gap={'30px'} marginTop={'30px'}>
          {servicesBox.map((item, i) => (
            <Grid className="serviceBox" item lg={3.7} sm={5.7} xs={12} key={i} sx={{
              backgroundColor: 'hsla(0,0%,100%,.3)',
              padding:'30px',
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer',
              transition: 'all .4s ease',

              '&:hover':{
                transform: 'scale(1.05)'
              },
            }}>
              <Typography color={"#fff"}>
                {item.icon}
              </Typography>
              <Typography
                display={"flex"}
                alignItems={"center"}
                fontSize={"20px"}
                color={"#fff"}
                marginTop={'10px'}
                marginBottom={'15px'}
              >
                {item.serviceName}
              </Typography>
              <Typography className='details' color={'rgba(29,29,36,.55)'} fontSize={'20px'} lineHeight={'30px'} sx={{transition: 'all .4s ease'}}>
                {item.servicedes}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default About;
