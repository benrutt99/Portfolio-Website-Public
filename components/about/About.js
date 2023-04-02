import React, { useEffect, useState } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useSpring, useTrail, useTransition } from "@react-spring/web";

import { aboutData } from "./AboutData";

import {
  Container,
  AboutMeTextContainer,
  AboutMeHeadText,
  ContentContainer,
  LeftCard,
  AboutDescriptionContainers,
  AboutDescriptionText,
  RightCard,
  BenImage,
  ContactButton,
  ContactLink,
  RadialBlur,
  Blob,
} from "./About.styles";

import BenImageSrc from "/public/about/ben.jpg";

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    // delay: 500,
    triggerOnce: true,
  });

  const [mapData, setMapData] = useState([]);

  useEffect(() => {
    if (inView) {
      setMapData(aboutData);
    } else {
      //setMapData([]);
    }
  }, [inView]);

  const animatedItems = useTransition(mapData, {
    from: {
      opacity: 0,
      transform: "translateY(50px)",
      config: {
        mass: 0.4,
        tension: 120,
        friction: 25,
        precision: 0.001,
        velocity: 0.008,
      },
    },
    enter: {
      opacity: 1,
      transform: "translateY(0px)",
      config: {
        mass: 0.4,
        tension: 120,
        friction: 25,
        precision: 0.001,
        velocity: 0.008,
      },
    },
    leave: { opacity: 0, scale: 0, config: { duration: 200 } },
    trail: 800,
  });

  const BackgroundOpacity = useSpring({
    transform: inView ? "translateY(0px)" : "translateY(100px)",
    opacity: inView ? `1` : "0.0",
    config: {
      mass: 1.4,
      tension: 60,
      friction: 25,
      precision: 0.001,
      velocity: 0.008,
    },
  });

  const FadeIn = useSpring({
    transform: inView ? "scale(1)" : "scale(0.4)",
    opacity: inView ? `1` : "0.0",
    config: {
      mass: 1.4,
      tension: 60,
      friction: 25,
      precision: 0.001,
      velocity: 0.008,
    },
  });

  const fontSizes = ["2.2rem", "2rem", "2rem", "2rem", "2rem"];
  const hideOnMobile = [true, false, true, false, false];

  return (
    <Container id='about' ref={ref}>
      <AboutMeTextContainer>
        <AboutMeHeadText style={FadeIn}>About Me</AboutMeHeadText>
      </AboutMeTextContainer>
      <ContentContainer>
        <LeftCard>
          {animatedItems((styleProps, item, _, idx) => {
            return (
              <AboutDescriptionContainers key={idx} style={styleProps}>
                <AboutDescriptionText
                  fontSize={fontSizes[idx]}
                  hideOnMobile={hideOnMobile[idx]}
                >
                  {item.description}
                </AboutDescriptionText>
              </AboutDescriptionContainers>
            );
          })}
        </LeftCard>
        <RightCard style={BackgroundOpacity}>
          <BenImage src={BenImageSrc} alt='image of ben' priority />
          <RadialBlur />
          <ContactLink
            activeClass='active'
            to='contact'
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <ContactButton style={FadeIn}>Contact</ContactButton>
          </ContactLink>
        </RightCard>
      </ContentContainer>
    </Container>
  );
}
