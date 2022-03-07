import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
<<<<<<< Updated upstream
import {MainPage} from "./components";
=======
import MainPage from "./components/main";
import QnaPage from "./components/qna";
import DesignPage from "./components/design";
>>>>>>> Stashed changes

function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< Updated upstream
        <Route path=" /" element={<MainPage />} />
=======
        <Route path="/" element={<MainPage />} />
        <Route path="/qna" element={<QnaPage />} />
        <Route path="/design" element={<DesignPage />} />
>>>>>>> Stashed changes
      </Routes>
    </BrowserRouter>
  );
}

export default App;
