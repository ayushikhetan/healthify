import React from "react";
import Logo from "../images/healthifyme_logo.png";
import styled from "styled-components";

const Header = () => (
  <Wrapper>
    <StyledLogo src={Logo} alt="healthify-me" />
  </Wrapper>
);

export { Header };

const Wrapper = styled.div`
  background: #fff;
  padding: 12px 24px;
  position: fixed;
  width: 100%;
  z-index: 999;
  box-shadow: 0 0 6px 0 rgba(224, 224, 224, 0.72);
  margin: -10px;
`;

const StyledLogo = styled.img`
  width: 160px;
`;
