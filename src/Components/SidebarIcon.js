import React, { useState } from "react";
import SidebarItems from "./SidebarItems";

const SidebarIcon = () => {
  const [isOpen, setIsopen] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const toggleSidebar = () => {
    setIsopen(!isOpen);
    setIsClosed(!isClosed);
  };

  return (
    <div>
      <div
        id="menu"
        onClick={toggleSidebar}
        style={{
          zIndex: "999",
        }}
      >
        <span
          style={{
            top: isClosed ? "50%" : "75%",
            transform: isClosed ? "rotate(-45deg)" : "rotate(0deg)",
            backgroundColor: isOpen ? "#000" : "#fff",
          }}
        ></span>
        <span
          style={{
            display: isClosed ? "none" : "block",
            backgroundColor: isOpen ? "#000" : "#fff",
          }}
        ></span>
        <span
          style={{
            bottom: isClosed ? "45%" : "75%",
            transform: isClosed ? "rotate(45deg)" : "rotate(0deg)",
            backgroundColor: isOpen ? "#000" : "#fff",
          }}
        ></span>
      </div>
      <div
        style={{
          backgroundColor: "#fff",
          minHeight: "100vh",
          position: "fixed",
          top: "0",
          right: "0",
          transition: "all .4s ease",
          width: isOpen ? "65%" : '0%',
          overflowY: 'auto'
        }}
      >
        <div
          style={{
            zIndex: "5",
            padding : '100px 20%'
          }}
        >
            <SidebarItems />
        </div>
      </div>
    </div>
  );
};

export default SidebarIcon;
