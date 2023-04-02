import styled from "styled-components";
import BackgroundDiv from "@/animations/click/animation_container/AnimationContainer";
import InnerContainer from "@/animations/click/animation_container_content/AnimationContainerContent";

export const NavBarContainer = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 80px;
  background: var(--clr-bg-primary);

  border-bottom: 2px solid #4d4d4d;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 5rem;

  @media (max-width: 740px) {
    padding: 1.5rem;
    justify-content: end;
  }
`;

export const NavbarHamburger = styled.div`
  color: var(--clr-primary);

  @media (min-width: 741px) {
    display: none;
  }
`;

export const NavBarLeftContent = styled.div`
  //MOBILE
  @media (max-width: 740px) {
    display: none;
  }
`;

export const NavBarRightContent = styled.div`
  display: flex;
  gap: 5rem;

  //MOBILE
  @media (max-width: 740px) {
    display: none;
  }
`;

//** MOBILE **/
export const Animation_Container = styled(BackgroundDiv)`
  display: flex;
  align-items: flex-start;
  margin-top: 80px;
`;

export const Animation_Container_Content = styled(InnerContainer)`
  background-color: var(--clr-bg-primary);
  display: flex;
`;
