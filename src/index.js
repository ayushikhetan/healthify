import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import { Login } from "./components/Login";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Login />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
