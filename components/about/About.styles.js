import styled from "styled-components";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { animated } from "@react-spring/web";

export const Container = styled.section`
  position: relative;
  min-height: auto;
  scroll-snap-align: start;
  background-color: var(--clr-bg-secondary);
  z-index: 1;
  padding: 2rem 0;
`;

export const AboutMeTextContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AboutMeHeadText = styled(animated.h1)`
  font-size: var(--fs-900);
  color: var(--clr-text-primary);
  text-align: center;
  border-bottom: 2px solid var(--clr-accent);
`;

export const ContentContainer = styled.div`
  margin: auto;
  padding: 2rem;

  max-width: 1500px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftCard = styled.div`
  padding: 2rem;
`;

export const AboutDescriptionContainers = styled(animated.div)``;

export const AboutDescriptionText = styled.p`
  color: var(--clr-text-primary);
  font-size: var(--fs-600);
  line-height: 3rem;
  padding-bottom: 20px;

  font-size: ${(props) => props.fontSize || "2rem"};

  @media (max-width: 767px) {
    display: ${(props) => (props.hideOnMobile ? "none" : "block")};
  }
`;

export const RightCard = styled(animated.div)`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  @media (max-width: 1150px) {
    display: none;
  }
`;

export const BenImage = styled(Image)`
  width: 100%;
  height: 100%;
  /* opacity: 0; */

  max-width: 1800px;
  clip-path: circle();
`;

export const ContactButton = styled(animated.button)`
  border-radius: 5px;
  font-size: var(--fs-700);
  border: none;
  background-color: transparent;
  border: 2px solid var(--clr-accent);
  color: var(--clr-text-primary);
  padding: 6px 20px 6px 20px;
  cursor: pointer;
  transition: transform 1s cubic-bezier(0.25, 0.75, 0.5, 1.25);

  &:hover {
    transform: scale(1.05);
    -webkit-box-shadow: 0px 0px 13px 3px rgba(161, 47, 27, 0.9);
    -moz-box-shadow: 0px 0px 13px 3px rgba(161, 47, 27, 0.9);
    box-shadow: 0px 0px 13px 3px rgba(161, 47, 27, 0.9);
  }
`;

export const ContactLink = styled(ScrollLink)``;

export const RadialBlur = styled.div`
  z-index: -1;
  position: absolute;
  width: 200px;
  height: 200px;
  left: 120px;
  top: 80px;

  background: rgb(131, 58, 180);
  background: radial-gradient(hsl(359, 76%, 37%), white);
  /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
  filter: blur(100px);
`;
