import React, { useEffect, useState } from "react";

//**ANIMATIONS**//
import {
  slideRightAnimation,
  slideLeftAnimation,
} from "@/animations/scroll/AnimationTypes";

import {
  NavBarMaginTop,
  VHContainer,
  HeroContainer,
  LeftCard,
  RightCard,
  HeroText,
  HeroImage,
  Blur,
} from "./Hero.styles";

import HeroImageSrc from "/public/hero/hero_coding.png";

export default function Hero() {
  const [loaded, pageLoaded] = useState(false);

  useEffect(() => {
    pageLoaded(true);
  }, []);

  //**ANIMATIONS**//
  const slideRight = slideRightAnimation(loaded);
  const slideLeft = slideLeftAnimation(loaded);

  return (
    <>
      <NavBarMaginTop />
      <VHContainer id='home'>
        <HeroContainer>
          <LeftCard style={slideRight}>
            <HeroText>
              Hi!
              <br />
              My name is <span className='i'>Ben.</span>
              <br />
              <span className='j'>I'm a Web Developer.</span>
            </HeroText>
          </LeftCard>
          <RightCard style={slideLeft}>
            <HeroImage
              src={HeroImageSrc}
              alt='hero image'
              priority
              width={600}
              height={600}
            ></HeroImage>
            <Blur />
          </RightCard>
        </HeroContainer>
      </VHContainer>
    </>
  );
}
