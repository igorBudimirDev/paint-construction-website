import { MotionConfig } from "framer-motion";
import TehnikeContent from "./TehnikeContent";
import TehnikeHero from "./TehnikeHero";
import { motion } from "framer-motion";
const Tehnike = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
      <TehnikeHero />
      <TehnikeContent />
    </motion.div>
  );
};

export default Tehnike;
