import React from "react";

import { AnimationContainer } from "./AnimationContainer.styles";

export default function Animation_Container({ children, onClick, className }) {
  return (
    <AnimationContainer
      className={className}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </AnimationContainer>
  );
}
