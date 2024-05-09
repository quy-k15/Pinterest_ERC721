import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BeginPage from "./pages/BeginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BeginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
