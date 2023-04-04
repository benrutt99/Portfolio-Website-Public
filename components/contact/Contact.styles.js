import styled from "styled-components";
import { animated } from "@react-spring/web";
import Image from "next/image";

export const Container = styled.section`
  position: relative;
  min-height: auto;
  scroll-snap-align: start;
  background-color: var(--clr-bg-secondary);
  padding: 2rem 1.5rem;
`;

export const ContactHeadTextContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactHeadText = styled(animated.h1)`
  font-size: var(--fs-900);
  color: var(--clr-text-primary);
  text-align: center;
  border-bottom: 2px solid var(--clr-accent);
`;

//** CONTACT FORM **/
export const FormContainer = styled(animated.form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--clr-bg-form);
  border-radius: 8px;
  padding: 2rem;
  margin: 3rem auto;

  max-width: 1000px;

  /* box-shadow: hsl(359, 76%, 75%) 0px 7px 29px 0px; */
`;

export const Label = styled.label`
  color: var(--clr-text-dark);
  font-size: var(--fs-500);
  padding-bottom: 0.5rem;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid black;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  background-color: var(--clr-bg-form-input);
  color: var(--clr-text-dark);
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: var(--clr-bg-form-input);
  color: var(--clr-text-dark);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  resize: none;
`;

export const SubmitButton = styled.button`
  border-radius: 5px;
  font-size: var(--fs-600);
  border: none;
  background-color: var(--clr-accent);
  color: var(--clr-text-primary);
  padding: 6px 20px 6px 20px;

  transition: transform 1s cubic-bezier(0.25, 0.75, 0.5, 1.25);

  &:hover {
    transform: scale(1.05);
    -webkit-box-shadow: 0px 0px 13px 3px rgba(161, 47, 27, 0.9);
    -moz-box-shadow: 0px 0px 13px 3px rgba(161, 47, 27, 0.9);
    box-shadow: 0px 0px 13px 3px rgba(161, 47, 27, 0.9);
  }
`;

export const MessageDiv = styled.div``;

export const Message = styled.p`
  font-size: var(--fs-500);
  color: var(--clr-accent);
  margin-bottom: 1rem;
  text-align: center;
  z-index: 1;
  position: relative;
`;

export const Blob = styled.div`
  /* z-index: 1;

  position: absolute;
  width: 1100px;
  height: 300px;

  left: 400px;
  top: 200px;

  background: linear-gradient(216deg, rgba(255, 255, 255, 0.6) 20%, red);
  /* border: 1px solid #ff0000; */
  filter: blur(100px); */
`;
