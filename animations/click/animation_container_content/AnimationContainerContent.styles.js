import styled from "styled-components";
import { motion } from "framer-motion";

export const AnimationContainerContent = styled(motion.div)`
  background-color: var(--clr-primary);
  width: 100%;
  padding: 2rem 2rem;
  z-index: 215;

  display: flex;
  align-items: center;
  justify-content: center;
`;
