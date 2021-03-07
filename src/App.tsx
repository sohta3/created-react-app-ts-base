import React from "react";
import styled from "styled-components/macro";
import logo from "./logo.svg";
import "./App.css";

const Message = styled.div`
  font-size: 2rem;
  color: red;
`;
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p
          css={`
            color: purple;
          `}
        >
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <Message>this is message</Message>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
