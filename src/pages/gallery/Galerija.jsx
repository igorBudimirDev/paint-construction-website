import { motion } from "framer-motion";
import GalerijaHeader from "./GalerijaHeader";
import GalleryContent from "./GalleryContent";
const Galerija = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
      <GalerijaHeader />
      <GalleryContent/>
    </motion.div>
  );
};

export default Galerija;
