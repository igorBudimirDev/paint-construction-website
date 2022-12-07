import { motion } from "framer-motion";
const Usluge = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
      className="bg-black h-[500px] w-[100%] absolute"
    >
      <h1>Usluge stranica</h1>
    </motion.div>
  );
};

export default Usluge;
