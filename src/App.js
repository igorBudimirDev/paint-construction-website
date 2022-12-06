import "./index.css";
import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Navbar from "./Navbar";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
