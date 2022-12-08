import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Galerija from "./pages/gallery/Galerija";
import Kontakt from "./pages/Kontakt";
import ErrorPage from "./pages/ErrorPage";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/galerija" element={<Galerija />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
