import React from "react";

import { HoverDiv } from "./HoverDiv.styles";

export default function Hover_Div({ children }) {
  return (
    <HoverDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </HoverDiv>
  );
}
