// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home"; // Ensure the path is correct
import About from "./pages/About"; // Example additional page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> {/* Additional route example */}
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
