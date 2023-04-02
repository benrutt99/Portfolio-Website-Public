import React, { useEffect, useState } from "react";
import { useSpring } from "@react-spring/web";

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

export default function Hero({ ref }) {
  const [loaded, pageLoaded] = useState(false);
  const [gradientSet, setGradient] = useState(false);

  useEffect(() => {
    pageLoaded(true);

    setTimeout(() => {
      setGradient(true);
    }, 250);
  }, []);

  const leftRight = useSpring({
    transform: loaded ? "translateX(0px)" : "translateX(-500px)",
    opacity: loaded ? `1` : "0.0",
    config: {
      mass: 2,
      tension: 85,
      friction: 30,
      precision: 0.001,
      velocity: 0.008,
    },
  });

  const rightLeft = useSpring({
    transform: loaded ? "translateX(0px)" : "translateX(500px)",
    opacity: loaded ? `1` : "0.0",
    config: {
      delay: 400,
      mass: 2,
      tension: 85,
      friction: 30,
      precision: 0.001,
      velocity: 0.008,
    },
  });

  const BlurStyle = useSpring({
    transform: gradientSet ? "scale(1)" : "scale(0.2)",
    config: {
      delay: 400,
      mass: 2,
      tension: 85,
      friction: 30,
      precision: 0.001,
      velocity: 0.008,
    },
  });

  return (
    <>
      <NavBarMaginTop />
      <VHContainer id='home'>
        <HeroContainer>
          <LeftCard style={leftRight}>
            <HeroText>
              Hi!
              <br />
              My name is <span className='i'>Ben.</span>
              <br />
              <span className='j'>I'm a Web Developer.</span>
            </HeroText>
          </LeftCard>
          <RightCard style={rightLeft}>
            <HeroImage src={HeroImageSrc} alt='hero image' priority></HeroImage>
            <Blur style={BlurStyle} />
          </RightCard>
        </HeroContainer>
      </VHContainer>
    </>
  );
}
