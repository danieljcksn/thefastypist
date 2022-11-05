import React from "react";

import { FooterButtonContainer, FooterContainer } from "./styles";
import { ButtonsContainer } from "../styles";

import { IoMail, IoLogoGithub } from "react-icons/io5";

export function Footer() {
  return (
    <FooterContainer>
      <ButtonsContainer>
        <FooterButtonContainer
          target={"_blank"}
          href={"https://github.com/danieljcksn/thefastypist"}
        >
          <IoLogoGithub />
          <span>github</span>
        </FooterButtonContainer>
        <FooterButtonContainer
          target={"_blank"}
          style={{ marginLeft: "2rem" }}
          href={"https://github.com/danieljcksn/thefastypist"}
        >
          <IoMail />
          <span>contact</span>
        </FooterButtonContainer>
      </ButtonsContainer>
    </FooterContainer>
  );
}
