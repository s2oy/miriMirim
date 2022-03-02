import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {RecoilRoot} from "recoil";

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
