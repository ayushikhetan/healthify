import React from "react";
import Logo from "../images/healthifyme_logo.png";
import { LoginForm } from "./LoginForm";
import {
  StyledLogo,
  StyledTitle,
  StyledSubTitle,
  Wrapper
} from "./styledComponents";

const Login = () => {
  return (
    <Wrapper>
      <StyledLogo src={Logo} alt="healthify-me" />
      <StyledTitle>Sign In</StyledTitle>
      <StyledSubTitle>Use your Healthifyme Account</StyledSubTitle>
      <LoginForm />
    </Wrapper>
  );
};

export { Login };
