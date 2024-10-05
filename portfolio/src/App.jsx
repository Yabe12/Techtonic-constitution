// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home"; // Ensure the path is correct
import Articles from "./pages/Articles"; // Example additional page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/Articles" element={<Articles/>} /> {/* Additional route example */}
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
