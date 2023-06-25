import { Container, Box, Typography, Grid } from "@mui/material";
import React from "react";
import { useSpring, animated } from "react-spring";

const FunFacts = () => {
  function Number({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: "200",
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  }

  return (
    <div className="funFactPage">
      <Container>
        <Box
          paddingTop={"50px"}
          textAlign={"center"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          paddingBottom={'50px'}
        >
          <Typography
            color={"#fff"}
            fontWeight={"700"}
            sx={{
              fontSize: { md: "60px", xs: "35px" },
            }}
          >
            Our Fun Facts
          </Typography>
        </Box>
        <Grid container gap={'30px'}>
          <Grid item lg={3.7} sm={5.7} xs={12} textAlign={'center'}>
            <Typography fontSize={"70px"} fontWeight={"700"} color={"#f9004d"}>
              +
              <span
                style={{
                  display: "inline-block",
                }}
              >
                <Number n={199} />
              </span>
            </Typography>
            <Typography color={'#fff'} fontSize={'20px'} textAlign={'center'}>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those.
            </Typography>
          </Grid>
          <Grid item lg={3.7} sm={5.7} xs={12} textAlign={'center'}>
            <Typography fontSize={"70px"} fontWeight={"700"} color={"#f9004d"}>
              +
              <span
                style={{
                  display: "inline-block",
                }}
              >
                <Number n={575} />
              </span>
            </Typography>
            <Typography color={'#fff'} fontSize={'20px'} textAlign={'center'}>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those.
            </Typography>
          </Grid>
          <Grid item lg={3.7} sm={5.7} xs={12} textAlign={'center'}>
            <Typography fontSize={"70px"} fontWeight={"700"} color={"#f9004d"}>
              +
              <span
                style={{
                  display: "inline-block",
                }}
              >
                <Number n={69} />
              </span>
            </Typography>
            <Typography color={'#fff'} fontSize={'20px'} textAlign={'center'}>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default FunFacts;
