import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import MainPage from "./components/main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
