import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Gallery from "./pages/Gallery";
import Kontakt from "./pages/Kontakt";
import Usluge from "./pages/Usluge";
import ErrorPage from "./pages/ErrorPage";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/galerija" element={<Gallery />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/usluge" element={<Usluge />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
