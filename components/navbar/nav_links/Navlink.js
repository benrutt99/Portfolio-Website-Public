import React from "react";

import { NavLink } from "./Navlink.styles";

import { NavlinkData } from "./NavlinkData";

export default function Navlinks({ onClick }) {
  return (
    <>
      {NavlinkData.map((link) => (
        <NavLink
          key={link.to}
          activeClass='active'
          anything='true'
          to={link.to}
          spy={true}
          smooth={true}
          offset={link.offset}
          duration={500}
          onClick={onClick}
        >
          {link.name}
        </NavLink>
      ))}
    </>
  );
}
