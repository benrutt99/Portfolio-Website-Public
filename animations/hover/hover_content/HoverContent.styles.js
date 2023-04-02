import styled from "styled-components";
import { motion } from "framer-motion";

export const HoverContent = styled(motion.div)`
  background-color: rgba(52, 51, 51, 0.6);
  opacity: 0.5;
  width: 100%;
  padding: 4rem 2rem;
  z-index: 215;
  height: 25px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
