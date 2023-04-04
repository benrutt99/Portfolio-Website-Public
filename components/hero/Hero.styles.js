import styled, { keyframes } from "styled-components";
import Image from "next/image";
import SpringAnimation from "@/animations/scroll/SpringAnimation";
import { animated } from "@react-spring/web";

export const NavBarMaginTop = styled.div`
  height: 80px;
`;

export const VHContainer = styled.section`
  min-height: calc(100vh - 80px);
  background-color: var(--clr-bg-primary);

  position: relative;
  display: flex;
  width: 100%;
  padding: 3rem 0 3rem 0;
  box-sizing: border-box;

  @media (max-width: 1050px) {
    min-height: auto;
  }

  /* @media (max-width: 760px) {
    overflow: hidden;
  } */
`;

export const HeroContainer = styled.div`
  margin: auto;
  padding: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 940px) {
    flex-direction: column;
    gap: 4rem;
  }
`;

export const LeftCard = styled(SpringAnimation)`
  position: relative;
  z-index: 3;
`;

export const RightCard = styled(SpringAnimation)`
  display: flex;
  position: relative;
  z-index: 2;
`;

export const HeroText = styled.h1`
  font-size: var(--fs-xl);
  text-align: start;
  font-weight: 700;
  color: var(--clr-primary);
  white-space: nowrap; //prevent wrapping

  display: inline-block;
  width: auto;

  padding-bottom: 10rem;

  .i {
    color: var(--clr-accent);
  }

  .j {
    color: transparent;
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: var(--clr-accent);
  }

  @media (max-width: 940px) {
    white-space: pre-wrap;
    padding-bottom: 3rem;
  }

  /* MOBILE */
  @media (max-width: 480px) {
    text-align: center;
    font-size: var(--fs-mobile);
  }
`;

export const HeroImage = styled(Image)`
  z-index: 2;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  max-width: 775px;

  pointer-events: none;
  user-select: none;

  transform: translateX(-22px);

  @media (max-width: 980px) {
    transform: translateX(0);
  }
`;

//**ANIMATION FOR MOBILE PERFORMANCE**//
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Blur = styled(SpringAnimation)`
  z-index: 1;

  position: absolute;
  width: 700px;
  height: 250px;

  left: 550px;
  top: 100px;

  background: linear-gradient(216deg, rgba(255, 255, 255, 0.6) 20%, red);
  filter: blur(100px);

  /* apply the animation to the component */
  animation: ${fadeIn} 0.8s ease-in-out 1s forwards;

  @media (max-width: 1050px) {
    width: 300px;
    height: 180px;
    top: 80px;
  }

  @media (max-width: 940px) {
    left: 700px;
  }

  @media (max-width: 450px) {
    height: 80px;
    top: 80px;
    left: 580px;
  }
`;
