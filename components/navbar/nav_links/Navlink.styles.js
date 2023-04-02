import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";

export const NavLink = styled(ScrollLink)`
  color: var(--clr-primary);
  user-select: none;
  padding: 3rem;
  font-size: var(--fs-500);
  cursor: pointer;

  &:hover {
    color: HSL(0, 0%, 60%);
  }

  &.active {
    color: white;
  }

  @media (max-width: 450px) {
    padding: 1.5rem;
  }
`;
