import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { FetchMock, fetchMock } from "@react-mock/fetch";
import { Login } from "../components/Login";

beforeAll(() => {
  window.alert = () => {};
});

test("Should display email field", () => {
  const { queryByPlaceholderText } = render(<Login />);
  expect(queryByPlaceholderText(/email/i)).toBeInTheDocument();
});

test("Should display password field", () => {
  const { queryByPlaceholderText } = render(<Login />);
  expect(queryByPlaceholderText(/password/i)).toBeInTheDocument();
});

test("Should show email and password required error", () => {
  const { queryByText, queryAllByText } = render(<Login />);

  const button = queryByText(/submit/i);
  fireEvent.click(button);

  expect(queryAllByText(/required/i).length).toBe(2);
});

test("Should show improper email error", () => {
  const { queryByPlaceholderText, queryByText } = render(<Login />);

  const emailField = queryByPlaceholderText(/email/i);
  fireEvent.change(emailField, { target: { value: "invalidEmail" } });

  const button = queryByText(/submit/i);
  fireEvent.click(button);

  expect(
    queryByText(/Please enter a valid email address/i)
  ).toBeInTheDocument();
});

test("Should show improper password error", () => {
  const { queryByPlaceholderText, queryByText } = render(<Login />);

  const passwordField = queryByPlaceholderText(/password/i);
  fireEvent.change(passwordField, { target: { value: "asd" } });

  const button = queryByText(/submit/i);
  fireEvent.click(button);

  expect(
    queryByText(
      /Your password should be of minimum 6 characters and contain atleast one uppercase/i
    )
  ).toBeInTheDocument();
});

test("Should show the loader on submit", () => {
  const { queryByPlaceholderText, queryByText } = render(<Login />);

  const emailField = queryByPlaceholderText(/email/i);
  fireEvent.change(emailField, { target: { value: "valid@gamil.com" } });

  const passwordField = queryByPlaceholderText(/password/i);
  fireEvent.change(passwordField, { target: { value: "Qwertyuiop" } });

  const button = queryByText(/submit/i);
  fireEvent.click(button);
  expect(queryByText(/loading/i)).toBeInTheDocument();
});

test("Should make the API call on submit", () => {
  const API_URL = "http://www.mocky.io/v2/5d9d9219310000153650e30b";
  const { queryByText, queryByPlaceholderText } = render(
    <FetchMock
      mocks={[
        {
          matcher: API_URL,
          method: "GET",
          response: {}
        }
      ]}
    >
      <Login />
    </FetchMock>
  );

  const emailField = queryByPlaceholderText(/email/i);
  fireEvent.change(emailField, { target: { value: "valid@gamil.com" } });

  const passwordField = queryByPlaceholderText(/password/i);
  fireEvent.change(passwordField, { target: { value: "Qwertyuiop" } });

  const button = queryByText(/submit/i);
  fireEvent.click(button);

  const [url] = fetchMock.lastCall(API_URL, "GET");
  expect(url).toBe(API_URL);
});
