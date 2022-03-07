import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import DesignPage from "./components/design";
import MainPage from "./components/main";
import QnaPage from "./components/qna";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/design" element={<DesignPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/qna" element={<QnaPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
