import "./index.css";
import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Navbar from "./Navbar";
import AnimatedRoutes from "./AnimatedRoutes";
import Footer from "./Footer";
function App() {
  
  return (
    <Router className="router">
      <Navbar />
      <AnimatedRoutes />
      <Footer/>
    </Router>
  );
}

export default App;
