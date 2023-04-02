import { sendContactForm } from "@/config/api";
import React, { useState } from "react";
import { useSpring } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

import {
  Container,
  ContactHeadTextContainer,
  ContactHeadText,
  FormContainer,
  Label,
  Input,
  TextArea,
  SubmitButton,
  MessageDiv,
  Message,
  Blob,
} from "./Contact.styles";

import BlobSrc from "/public/svg/blob.svg";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setShowMessage("Please fill out all fields.");
    } else {
      try {
        await sendContactForm(formData);
        setFormData({ name: "", email: "", message: "" });
        setShowMessage(
          "Thank you for reaching out! I will contact you shortly!"
        );
      } catch {
        setShowMessage("Sorry, there was an error sending your message.");
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { ref, inView } = useInView({
    threshold: 0.1,

    triggerOnce: true,
  });

  const FadeIn = useSpring({
    transform: inView ? "translateY(0px)" : "translateY(100px)",
    opacity: inView ? `1` : "0.0",
    config: {
      mass: 1.5,
      tension: 100,
      friction: 50,
      precision: 0.001,
      velocity: 0.008,
    },
  });

  return (
    <Container id='contact'>
      <ContactHeadTextContainer ref={ref}>
        <ContactHeadText style={FadeIn}>Contact</ContactHeadText>
      </ContactHeadTextContainer>

      <FormContainer onSubmit={handleSubmit} style={FadeIn}>
        {showMessage && (
          <MessageDiv>
            {" "}
            <Message>{showMessage}</Message>
          </MessageDiv>
        )}
        <Label htmlFor='name'>Name</Label>
        <Input
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
        <Label htmlFor='email'>Email</Label>
        <Input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        <Label htmlFor='message'>Message</Label>
        <TextArea
          id='message'
          name='message'
          value={formData.message}
          onChange={handleChange}
        />
        <SubmitButton type='submit'>Submit</SubmitButton>
      </FormContainer>
    </Container>
  );
}
