import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { AiFillCloseCircle } from "react-icons/ai";

import {
  PopupContainer,
  PopupCard,
  ProjectImageContainer,
  ProjectImage,
  TextContainer,
  ProjectHead,
  ProjectDescription,
  CloseButton,
} from "./ProjectPopup.styles";

import { Data } from "../Data";

export default function ProjectHighlightPopup({ idx, closePopup }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <PopupContainer>
      <PopupCard closePopup={closePopup}>
        <CloseButton onClick={() => closePopup()}>
          <AiFillCloseCircle className='x' />
        </CloseButton>
        <ProjectImageContainer>
          <ProjectImage
            src={Data?.[idx]?.image}
            width={400}
            height={400}
            alt='project image'
            priority
          />
        </ProjectImageContainer>
        <TextContainer>
          <ProjectHead>{Data[idx].title}</ProjectHead>
          <ProjectDescription>{Data[idx].popupDescription}</ProjectDescription>
        </TextContainer>
      </PopupCard>
    </PopupContainer>
  );
}
