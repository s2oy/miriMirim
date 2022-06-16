import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {RecoilRoot} from "recoil";
// import firebase from "firebase";
import styled from "@emotion/styled";

const Flex = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

ReactDOM.render(
  <RecoilRoot>
    <Suspense fallback={<h1>loading page...</h1>}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Suspense>
  </RecoilRoot>,
  document.getElementById("root")
);
