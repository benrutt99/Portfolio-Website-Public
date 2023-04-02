import styled from "styled-components";
import Image from "next/image";

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemCard = styled.div`
  border-radius: 8px;
  background-color: white;
  margin: 0 1.5rem;
  padding: 1rem 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemName = styled.h1`
  font-size: var(--fs-700);
  color: var(--clr-primary);
  color: black;
`;
