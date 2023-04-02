import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";
import { animated } from "@react-spring/web";

export const ProjectsCard = styled(animated.div)`
  border-radius: 8px;
  background-color: white;
  overflow: hidden;

  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  /* transition: transform 0.5s cubic-bezier(0.25, 0.75, 0.5, 1.25); */

  &:hover {
    background-color: HSL(0, 0%, 70%);
    transform: scale(1.01);
  }

  /* &:nth-child(2) {
    transform: translateY(-35px);
    &:hover {
      background-color: HSL(0, 0%, 70%);
      transform: scale(1.02) translateY(-35px);
    }

    @media (max-width: 1050px) {
      transform: translateY(0px);

      &:hover {
        background-color: HSL(0, 0%, 70%);
        transform: scale(1.02) translateY(0);
      }
    }
  } */
`;

export const ProjectImageContainer = styled.div`
  max-width: 420px;
  max-height: 420px;
`;

export const ProjectImage = styled(Image)`
  width: 100%;
  height: 100%;
  pointer-events: none;
  user-select: none;
`;

export const TextContainer = styled.div`
  max-width: 50em;
  height: 11rem;
  //border: 1px solid red;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProjectHead = styled.h2`
  color: black;
  font-size: var(--fs-800);
  padding-bottom: 1rem;
  text-align: center;
`;

export const ProjectDescription = styled.p`
  color: black;
  font-size: var(--fs-500);
  padding-bottom: 0.5rem;
  text-align: center;
`;

export const HoverText = styled.h3`
  color: white;
  font-size: var(--fs-500);
`;
