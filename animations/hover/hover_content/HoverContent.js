import React, { useState, useEffect } from "react";

import { HoverContent } from "./HoverContent.styles";

const dropIn = {
  hidden: {
    y: "10vh",
    opacity: 1,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.6,
      type: "spring",
      damping: 25,
      stiffness: 150,
    },
  },
  exit: {
    y: "10vh",
    opacity: 0,
  },
};

export default function Hover_Content({ children }) {
  return (
    <HoverContent
      onClick={(e) => e.stopPropagation()}
      variants={dropIn}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      {children}
    </HoverContent>
  );
}
