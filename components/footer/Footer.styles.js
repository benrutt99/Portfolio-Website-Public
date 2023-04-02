import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: var(--clr-bg-secondary);
  display: flex;
  flex-direction: column;
  position: relative;

  justify-content: center;
  align-items: center;
`;

export const InnerContainer = styled.div`
  max-width: 1500px;
  position: relative;

  height: 300px;
  display: flex;
  justify-content: center;
  align-items: end;
`;

export const CopyRight = styled.p`
  padding-bottom: 15px;
  font-size: var(--fs-300);
  color: var(--clr-primary);
`;
