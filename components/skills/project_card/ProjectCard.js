import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useSpring } from "@react-spring/web";

import {
  ProjectsCard,
  ProjectImageContainer,
  ProjectImage,
  TextContainer,
  ProjectHead,
  ProjectDescription,
  HoverText,
} from "./ProjectCard.styles";

import Default from "../../../public/skills/project-guy.png";

//HOVER ANIMATIONS
import Hover_Div from "@/animations/hover/hover_div/HoverDiv";
import Hover_Content from "@/animations/hover/hover_content/HoverContent";

export default function ProjectCard({
  image,
  title,
  description,
  onClick,
  idx,

  animatedStyle,
}) {
  const [isShown, setIsShown] = useState(false);

  return (
    <ProjectsCard
      style={animatedStyle}
      onClick={() => onClick(idx)}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <ProjectImageContainer>
        <ProjectImage
          src={image ?? Default}
          width={600}
          height={600}
          alt='project image'
          priority
        />
      </ProjectImageContainer>
      <TextContainer>
        <ProjectHead>{title}</ProjectHead>
        <ProjectDescription>{description}</ProjectDescription>
      </TextContainer>
      <AnimatePresence initial={false} mode='wait'>
        {isShown && (
          <Hover_Div>
            <Hover_Content>
              <HoverText>Click to Learn More</HoverText>
            </Hover_Content>
          </Hover_Div>
        )}
      </AnimatePresence>
    </ProjectsCard>
  );
}
