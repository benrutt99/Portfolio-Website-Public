import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { aboutData } from "./AboutData";

//**ANIMATIONS**//
import {
  useFadeInAnimation,
  useWipeUpAnimation,
  useAnimatedItems,
} from "@/animations/scroll/AnimationTypes";

//**STYLED COMPONENTS**//
import {
  Container,
  AboutMeTextContainer,
  AboutMeHeadText,
  ContentContainer,
  LeftCard,
  AboutDescriptionText,
  RightCard,
  BenImage,
  ContactButton,
  ContactLink,
  RadialBlur,
} from "./About.styles";

import BenImageSrc from "/public/about/ben.jpg";

export default function About() {
  //**In View Observer**//
  const { ref, inView } = useInView({
    threshold: 0.1,
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

  //**ANIMATIONS**//
  const animatedItems = useAnimatedItems(mapData);
  const fadeIn = useFadeInAnimation(inView);
  const wipeUp = useWipeUpAnimation(inView);

  const fontSizes = ["2.2rem", "2rem", "2rem", "2rem", "2rem"];
  const hideOnMobile = [true, false, true, false, false];

  return (
    <Container id='about' ref={ref}>
      <AboutMeTextContainer style={fadeIn}>
        <AboutMeHeadText>About Me</AboutMeHeadText>
      </AboutMeTextContainer>
      <ContentContainer>
        <LeftCard>
          {animatedItems((styleProps, item, _, idx) => {
            return (
              <AboutDescriptionText
                key={idx}
                style={styleProps}
                fontSize={fontSizes[idx]}
                hideOnMobile={hideOnMobile[idx]}
              >
                {item.description}
              </AboutDescriptionText>
            );
          })}
        </LeftCard>

        <RightCard style={wipeUp}>
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
            <ContactButton style={fadeIn}>Contact</ContactButton>
          </ContactLink>
        </RightCard>
      </ContentContainer>
    </Container>
  );
}
