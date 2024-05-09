import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BeginPage from "./pages/BeginPage";
import CreateItemPage from "./pages/CreateItemPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/createItemPage" element={<CreateItemPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<BeginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
