import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import DesignPage from "./components/design";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/design" element={<DesignPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
