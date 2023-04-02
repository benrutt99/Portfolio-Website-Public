import React from "react";

import {
  FooterContainer,
  InnerContainer,
  CopyRight,
  Blob,
} from "./Footer.styles";

import SocialLink from "../navbar/social_links/SocialLink";

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <InnerContainer>
          <CopyRight>&#169; Copyright 2023. Made by Ben Rutt</CopyRight>
        </InnerContainer>
      </FooterContainer>
    </>
  );
}
