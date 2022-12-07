import { motion } from "framer-motion";
import GalerijaHeader from "../GalerijaHeader";
const Galerija = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.75, ease: "easeOut" }}
    exit={{ opacity: 0 }}
    >
      <GalerijaHeader />
        
    </motion.div>
  );
};

export default Galerija;
