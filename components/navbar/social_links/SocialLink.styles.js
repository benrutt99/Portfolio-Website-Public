import styled from "styled-components";
import Link from "next/link";

export const Container = styled.div``;

export const Card = styled.div`
  background-color: var(--clr-primary);
  padding: 5px;
  border-radius: 8px;
  transition: transform 1s cubic-bezier(0.25, 0.75, 0.5, 1.25),
    background-color 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.2);
    -webkit-box-shadow: 0px 0px 18px 1px rgba(89, 55, 141, 0.9);
    -moz-box-shadow: 0px 0px 18px 1px rgba(89, 55, 141, 0.9);
    box-shadow: 0px 0px 18px 1px rgba(89, 55, 141, 0.9);

    background-color: hsl(359, 76%, 95%);
  }
`;

export const SLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
