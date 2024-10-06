// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home"; // Ensure the path is correct
import Articles from "./pages/articlesPage"; // Example additional page

const App = () => {
  return (
   <>
   <Home/>
   <Articles/>
   </>
  );
};

export default App;
