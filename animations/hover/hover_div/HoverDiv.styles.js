import styled from "styled-components";
import { motion } from "framer-motion";

export const HoverDiv = styled(motion.div)`
  width: 100%;
  height: 100%;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
