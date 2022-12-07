import { motion } from "framer-motion";

const Galerija = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
    >
      <>
        <div className=" gallery w-[100%] h-[300px] bg-black absolute">
          {/* <div className="gallery-overlay w-[100%] h-[25rem] absolute bg-overlay-color flex justify-center items-center">
          <h1 className="text-white text-6xl font-bold">NAŠA GALERIJA</h1>
        </div> */}
        </div>
      </>
    </motion.div>
  );
};

export default Galerija;
