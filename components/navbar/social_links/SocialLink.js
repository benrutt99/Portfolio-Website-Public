import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import { Container, SLink, Card } from "./SocialLink.styles";

export default function SocialLink() {
  return (
    <>
      <Card className='.fade'>
        <SLink href='https://github.com/benrutt99'>
          <AiFillGithub style={{ fontSize: "2.5rem" }} />
        </SLink>
      </Card>
      <Card>
        <SLink href='https://www.linkedin.com/in/benrutt/'>
          <FaLinkedinIn style={{ fontSize: "2.5rem" }} />
        </SLink>
      </Card>
    </>
  );
}
