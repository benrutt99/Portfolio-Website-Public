import React, { useState, useEffect } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";

import { AnimationContainerContent } from "./AnimationContainerContent.styles";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 18,
      stiffness: 150,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

export default function Animation_Container_Content({
  children,
  className,
  closePopup,
}) {
  const [didLoad, setLoaded] = useState(false);

  //** ONLY ALLOW CLOSEPOPUP IF LOADED = TRUE**/
  const closePopupBox = () => {
    if (didLoad) {
      closePopup?.();
    }
  };

  const ref = useDetectClickOutside({ onTriggered: closePopupBox });

  //**ONCE IS MOUNTS **/
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <AnimationContainerContent
      onClick={(e) => e.stopPropagation()}
      variants={dropIn}
      initial='hidden'
      animate='visible'
      exit='exit'
      className={className}
      ref={ref}
    >
      {children}
    </AnimationContainerContent>
  );
}
