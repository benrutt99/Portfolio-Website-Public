import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";

import Navlinks from "./nav_links/Navlink";
import SocialLink from "./social_links/SocialLink";

import {
  NavBarContainer,
  NavBarLeftContent,
  NavBarRightContent,
  NavbarHamburger,
  Animation_Container,
  Animation_Container_Content,
} from "./Navbar.styles";
import { NavLink } from "./nav_links/Navlink.styles";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <NavBarContainer>
      <NavBarLeftContent>
        <Navlinks />
      </NavBarLeftContent>
      <NavBarRightContent>
        <SocialLink />
      </NavBarRightContent>

      <NavbarHamburger>
        <Hamburger toggled={isOpen} toggle={setOpen} />
        <AnimatePresence
          initial={false}
          mode='wait'
          onExitComplete={() => null}
        >
          {isOpen && (
            <Animation_Container isOpen={isOpen}>
              <Animation_Container_Content closePopup={close}>
                <Navlinks onClick={close} />
              </Animation_Container_Content>
            </Animation_Container>
          )}
        </AnimatePresence>
      </NavbarHamburger>
    </NavBarContainer>
  );
}
