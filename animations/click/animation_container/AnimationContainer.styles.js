import styled from "styled-components";
import { motion } from "framer-motion";

export const AnimationContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #000000e1;

  display: flex;
  justify-content: center;
  align-items: center;
`;
