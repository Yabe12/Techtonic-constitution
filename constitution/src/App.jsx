// src/App.js
import React from "react";
import Admin from "./pages/adminPage";
import Home from "./pages/home"; // Ensure the path is correct
import Articles from "./pages/articlesPage"; // Example additional page

const App = () => {
  return (
   <>
   <Home/>
   <Articles/>
   <Admin/>
   </>
  );
};

export default App;
