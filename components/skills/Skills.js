import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTransition } from "@react-spring/web";
import { useSpring } from "@react-spring/web";

import ProjectCard from "./project_card/ProjectCard";
import SkillsCarousel from "./skills_carousel/SkillsCarousel";
import ProjectPopup from "./project_card/project_popup/ProjectPopup";

import {
  Container,
  SkillsHeadContainer,
  SkillsHeadText,
  ProjectsContainer,
  CarouselContainer,
} from "./Skills.styles";

import { Data } from "./project_card/Data";

export default function Skills() {
  const [idx, setIdx] = useState(-1);
  const [show, setShow] = useState(false);
  const [disableClick, setDisableClick] = useState(false);

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

  //ANIMATION
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [mapData, setMapData] = useState([]);

  useEffect(() => {
    if (inView) {
      setMapData(Data);
    } else {
      // setMapData([]);
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
    trail: 900,
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

  const WipeUp = useSpring({
    transform: inView ? "translateY(0px)" : "translateY(50px)",
    opacity: inView ? `1` : "0.0",
    config: {
      mass: 1.4,
      tension: 60,
      friction: 25,
      precision: 0.001,
      velocity: 0.008,
    },
  });

  return (
    <>
      <Container id='skills' ref={ref}>
        <SkillsHeadContainer>
          <SkillsHeadText style={WipeUp}>Projects</SkillsHeadText>
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
                animatedStyle={styleProps}
              />
            );
          })}
        </ProjectsContainer>
        <SkillsHeadContainer>
          <SkillsHeadText style={BackgroundOpacity}>Skills</SkillsHeadText>
        </SkillsHeadContainer>
        <CarouselContainer style={BackgroundOpacity}>
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
