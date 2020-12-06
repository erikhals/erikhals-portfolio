import React from "react";
import HamburgerIcon from "./hamburger";
import LinkedInIcon from "./linkedin";

function Icon(props) {
  switch (props.symbol) {
    case "hamburger":
      return <HamburgerIcon />;
    case "linkedin":
      return <LinkedInIcon />;
    default:
      return <span>Unknown icon: {props.symbol}</span>;
  }
}

export default Icon;
