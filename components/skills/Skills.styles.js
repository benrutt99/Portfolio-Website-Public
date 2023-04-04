import styled from "styled-components";
import { animated } from "@react-spring/web";
import SpringAnimation from "@/animations/scroll/SpringAnimation";

export const Container = styled.section`
  background-color: var(--clr-bg-secondary);
  padding: 1rem 0;
  min-height: auto;
  position: relative;
  z-index: 3;

  min-height: 300px;
`;

export const SkillsHeadContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SkillsHeadText = styled(animated.h1)`
  font-size: var(--fs-900);
  color: var(--clr-text-primary);
  text-align: center;
  border-bottom: 2px solid var(--clr-accent);
  margin-top: 1rem;
`;

export const ProjectsContainer = styled.div`
  margin: 3rem auto 1rem auto;
  max-width: 1800px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 3.5rem;
  align-items: center;
  padding: 20px;

  @media (max-width: 1050px) {
    grid-template-columns: 1fr;
    margin: 2.5rem auto 1rem auto;
    gap: 3rem;
  }
`;

export const CarouselContainer = styled(SpringAnimation)`
  margin: 6rem 1rem;
`;

export const Blob = styled.div`
  /* z-index: 0;
  position: absolute;
  width: 1100px;
  height: 300px;
  left: -600px;
  top: 200px;

  background: linear-gradient(
    216deg,
    rgba(255, 255, 255, 0.9) 20%,
    hsl(359, 76%, 35%)
  );
  border: 1px solid #ff0000;
  filter: blur(100px);

  @media (max-width: 1050px) {
    width: 1100px;
    height: 1000px;
  }

  @media (max-width: 500px) {
    display: none;
  } */
`;
