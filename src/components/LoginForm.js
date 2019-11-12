import React, { useState } from "react";
import { Loader } from "./Loader";
import { Input } from "./Input";
import { submitForm$$, validateEamil, validatePassword } from "../utils";
import { StyledForm, StyledButton } from "./styledComponents";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const clearForm = () => {
    setEmail("");
    setPassword("");
    setEmailError("");
    setPasswordError("");
  };

  async function submitForm() {
    try {
      setIsLoading(true);
      await submitForm$$();
      setIsLoading(false);
      console.log("Successfully logged in");
      clearForm();
    } catch (error) {
      setIsLoading(false);
      console.log("Error in logging in");
    }
  }

  const handleSubmit = event => {
    event.preventDefault();
    const isEmailValid = validateEamil(email, setEmailError);
    const isPasswordValid = validatePassword(password, setPasswordError);

    if (isEmailValid && isPasswordValid) {
      submitForm();
    }
  };

  const onEmailChange = event => {
    const { value: email } = event.target;
    setEmail(email);
    setEmailError("");
  };

  const onPasswordChange = event => {
    const { value: password } = event.target;
    setPassword(password);
    setPasswordError("");
  };

  return (
    <>
      {isLoading && <Loader />}
      <StyledForm onSubmit={handleSubmit} noValidate>
        <Input
          type="email"
          name="email"
          value={email}
          placeholder="Enter your Email"
          onChange={onEmailChange}
          error={emailError}
        />
        <Input
          type="password"
          name="password"
          value={password}
          placeholder="Enter your Password"
          onChange={onPasswordChange}
          error={passwordError}
        />
        <StyledButton type="submit" disabled={emailError || passwordError}>
          Submit
        </StyledButton>
      </StyledForm>
    </>
  );
};

export { LoginForm };
