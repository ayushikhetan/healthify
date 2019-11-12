import React from "react";
import { StyledInput, StyledErrorMsg } from "./styledComponents";

const Input = ({ error, ...rest }) => {
  return (
    <>
      <StyledInput {...rest} />
      {error && <StyledErrorMsg>{error}</StyledErrorMsg>}
    </>
  );
};

export { Input };
