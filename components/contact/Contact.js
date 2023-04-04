import { sendContactForm } from "@/config/api";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

//**ANIMATIONS**//
import { useWipeUpAnimation } from "@/animations/scroll/AnimationTypes";

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

  //**In View Observer**//
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  //**ANIMATIONS**//
  const wipeUp = useWipeUpAnimation(inView);

  return (
    <Container id='contact'>
      <ContactHeadTextContainer ref={ref}>
        <ContactHeadText style={wipeUp}>Contact</ContactHeadText>
      </ContactHeadTextContainer>

      <FormContainer onSubmit={handleSubmit} style={wipeUp}>
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
      <Blob />
    </Container>
  );
}
