import HomeHero from "./HomeHero";
import HomeMoto from "./HomeMoto";
import HomeUsluge from "./HomeUsluge";
import HomeTehnike from "./HomeTehnike";
import HomeKontakt from "./HomeKontakt";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut"}}
      exit={{ opacity: 0 }}
    >
      <>
        <HomeHero />
        <HomeMoto />
        <HomeUsluge />
        <HomeTehnike />
        <HomeKontakt />
      </>
    </motion.div>
  );
};

export default Home;
