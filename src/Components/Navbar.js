import React from "react";
import { headItems } from "./Utils/Constants";
import { Box , Container } from "@mui/material";
import SidebarIcon from "./SidebarIcon";

const Navbar = () => {
  return (
    <Container
      sx={{
        paddingTop: {md: '40px' , xs: '20px'},
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <img src="/Images/logo.png" style={{ width: "150px" }} />
      </div>
      <Box
        sx={{
          display: { md: "flex", xs: "none" },
          alignItems: "center",
        }}
      >
        <div>
          {headItems.map((item, i) => (
            <a href="#" className="HeadItems" key={i}>
              {item.name}
            </a>
          ))}
        </div>
        <a href="#" className="headButton">
          Buy Now
        </a>
      </Box>
      <Box 
      sx={{
        display: {md: 'none' , xs: 'flex'}
      }}>
        <SidebarIcon />
      </Box>
    </Container>
  );
};

export default Navbar;
