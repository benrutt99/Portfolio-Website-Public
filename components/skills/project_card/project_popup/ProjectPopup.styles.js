import styled from "styled-components";
import Image from "next/image";
import Animation_Container from "@/animations/click/animation_container/AnimationContainer";
import Animation_Container_Content from "@/animations/click/animation_container_content/AnimationContainerContent";

export const PopupContainer = styled(Animation_Container)`
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupCard = styled(Animation_Container_Content)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: white;
  border-radius: 8px;
  z-index: 201;

  max-width: 1000px;
  max-height: 90vh;
`;

export const ProjectImageContainer = styled.div`
  max-width: 380px;
  max-height: 380px;

  @media (max-width: 740px) {
    max-width: 200px;
    max-height: 200px;
  }
`;

export const ProjectImage = styled(Image)`
  width: 100%;
  height: 100%;
  pointer-events: none;
  user-select: none;
`;

export const TextContainer = styled.div`
  max-width: 80em;
  overflow-y: auto;
`;

export const ProjectHead = styled.h2`
  color: black;
  font-size: var(--fs-800);
  text-align: center;
`;

export const ProjectDescription = styled.p`
  color: black;
  font-size: var(--fs-500);
  padding: 0.8rem 1.3rem;
  text-align: center;
`;

export const CloseButton = styled.div`
  display: none;

  @media (max-width: 740px) {
    display: block;
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: 205;
    cursor: pointer;

    .x {
      width: 3.5rem;
      height: 3.5rem;
    }
  }
`;
