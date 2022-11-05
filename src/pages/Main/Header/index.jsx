import React from "react";

import { Logo, InlineButtonContainer, HeaderContainer } from "./styles";

import { ButtonsContainer } from "../styles";

import { MdOutlineLanguage, MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

export function Header() {
  let mode = "dark";

  return (
    <HeaderContainer>
      <Logo>
        thefas<span>t</span>ypist
      </Logo>
      <ButtonsContainer>
        <InlineButtonContainer>
          <MdOutlineLanguage />
          <span>english</span>
        </InlineButtonContainer>
        <InlineButtonContainer>
          {mode === "dark" ? <MdOutlineDarkMode /> : <CiLight />}
          <span>{mode === "dark" ? "dark mode" : "light mode"}</span>
        </InlineButtonContainer>
      </ButtonsContainer>
    </HeaderContainer>
  );
}
