import "./index.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Gallery from "./pages/Gallery";
import Kontakt from "./pages/Kontakt";
import Usluge from "./pages/Usluge";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./Navbar";

function App() {
  return (
    <Router basename="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galerija" element={<Gallery />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/usluge" element={<Usluge />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
