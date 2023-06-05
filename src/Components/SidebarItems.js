import React, { useState } from "react";
import { headItems } from "./Utils/Constants";

const SidebarItems = () => {

  const [isSelected , setIsSelected] = useState(false)

  const toggleButton = () => {
    setIsSelected(!isSelected)
  }

  return (
    <div>
      {headItems.map((item, i) => (
        <a href="#" className="HeadItems-res" key={i} onClick={toggleButton} style={{
          color: isSelected ? '#f9004d' : '#c6c9d8'
        }}>
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default SidebarItems;
