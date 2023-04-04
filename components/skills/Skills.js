import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

import ProjectCard from "./project_card/ProjectCard";
import SkillsCarousel from "./skills_carousel/SkillsCarousel";
import ProjectPopup from "./project_card/project_popup/ProjectPopup";

//**ANIMATIONS**//
import {
  useWipeUpAnimation,
  useAnimatedItems,
} from "@/animations/scroll/AnimationTypes";

import {
  Container,
  SkillsHeadContainer,
  SkillsHeadText,
  ProjectsContainer,
  CarouselContainer,
  Blob,
} from "./Skills.styles";

import { Data } from "./project_card/Data";

export default function Skills() {
  const [idx, setIdx] = useState(-1);
  const [show, setShow] = useState(false);
  const [disableClick, setDisableClick] = useState(false);
  const [mapData, setMapData] = useState([]);

  //**In View Observer**//
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  //**HANDLE CLICK EVENT FOR PROJECT CARD**//
  const handleClick = (idx) => {
    if (!disableClick) {
      setIdx(idx);
      setShow(true);
    }
  };

  const closePopupWithDelay = () => {
    setShow(false);
    setDisableClick(true);
    document.body.style.overflow = "auto";

    setTimeout(() => {
      setDisableClick(false);
    }, 500);
  };

  useEffect(() => {
    if (inView) {
      setMapData(Data);
    } else {
      // setMapData([]);
    }
  }, [inView]);

  //**ANIMATIONS**//
  const wipeUp = useWipeUpAnimation(inView);
  const animatedItems = useAnimatedItems(mapData);

  return (
    <>
      <Container id='skills' ref={ref}>
        <SkillsHeadContainer>
          <SkillsHeadText style={wipeUp}>Projects</SkillsHeadText>
        </SkillsHeadContainer>
        <ProjectsContainer>
          {animatedItems((styleProps, item, _, idx) => {
            return (
              <ProjectCard
                item={item}
                idx={idx}
                key={idx}
                onClick={() => handleClick(idx)}
                image={item.image}
                title={item.title}
                description={item.description}
                link={item.link}
                animatedStyle={styleProps}
              />
            );
          })}
          <Blob />
        </ProjectsContainer>
        <SkillsHeadContainer>
          <SkillsHeadText style={wipeUp}>Skills</SkillsHeadText>
        </SkillsHeadContainer>
        <CarouselContainer style={wipeUp}>
          <SkillsCarousel />
        </CarouselContainer>
      </Container>
      <AnimatePresence initial={false} mode='wait' onExitComplete={() => null}>
        {show ? (
          <ProjectPopup idx={idx} closePopup={closePopupWithDelay} />
        ) : (
          ""
        )}
      </AnimatePresence>
    </>
  );
}
