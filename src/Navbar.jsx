import { Link } from "react-router-dom";
import KosticLogo from "./assets/logo.png";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AnimatePresence, motion, useCycle } from "framer-motion";
const Navbar = () => {
  let [navMenu, setNavMenu] = useCycle(false, true);
  const handleNav = () => {
    setNavMenu(!navMenu);
  };
  const itemVariants = {
    closed: {
      translateX: 50,
      opacity: 0,
    },
    open: { translateX: 0, opacity: 1 },
  };
  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };
  //const [open, cycleOpen] = useCycle(false, true);
  return (
    <div className="absolute top-0 right-0 left-0 z-50">
      <nav className="flex justify-around static text-sm pt-8">
        <div className="max-w-[140px] flex flex-col items-center md:max-w-[150px]">
          <Link className="flex flex-col items-center" to="/">
            <img className="max-w-[50%]" src={KosticLogo} alt="" />
            <span className="logo__span text-white text-[18px] md:text-[20px]">
              Molerski radovi Kostić
            </span>
          </Link>
        </div>
        <div className="nav__contact hidden lg:flex">
          <div className="kontakt__content--phone w-[100%] flex flex-col px-10 items-center md:flex-row">
            <a href="tel:+381632748948">
              <BsTelephoneFill className="nav-phone text-xl text-main-green hover:text-white" />
            </a>
            <a href="tel:+381632748948"></a>
            <span className="mt-2 md:mt-0 md:ml-5 text-white md:text-sm font-light">
              063/274-89-48
            </span>
          </div>
          <div className="kontakt__content--phone p-2 flex flex-col items-center md:flex-row">
            <a href="https://www.instagram.com/molerski_radovi_milenko_kostic/">
              {" "}
              <AiFillInstagram className="nav-insta text-xl text-[#fa7e1e] hover:text-white" />
            </a>
            <a href="https://www.instagram.com/molerski_radovi_milenko_kostic/">
              {" "}
            </a>
            <span className="text-[1em] sm:text-2xl mt-2 md:mt-0 md:ml-5 text-white md:text-sm font-light">
              @molerski.radovi.kostic
            </span>{" "}
          </div>
          <div className="kontakt__content--phone p-2 flex flex-col w-[100%] items-center md:flex-row">
            <a href="mailto:mile26a@gmail.com">
              <MdEmail className="nav-mail text-xl text-[#bb001b] hover:text-white" />
            </a>
            <span className="text-[1em] sm:text-2xl mt-2 md:mt-0 md:ml-5 text-white md:text-sm font-light">
              mile26a@gmail.com
            </span>
          </div>
        </div>

        <div className="hidden md:flex">
          <Link className="mx-[7px] text-[15px] text-white" to="/">
            Početna
          </Link>
          <Link className="mx-[7px] text-[15px] text-white" to="/tehnike">
            Tehnike
          </Link>
          <Link className="mx-[7px] text-[15px] text-white" to="/galerija">
            Galerija
          </Link>
        </div>

        <div className="w-[30%] text-black-500 flex justify-end md:hidden">
          <HiMenu
            onClick={handleNav}
            className="text-4xl text-white hover:cursor-pointer fixed"
          />
        </div>
      </nav>
      <AnimatePresence>
        {navMenu && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{ width: "45%" }}
            exit={{
              width: 0,
              transition: { duration: 0.8 },
            }}
            className="navMenu w-[45%] h-screen bg-menu-overlay-color fixed top-0 right-0 flex flex-col justify-center gap-11"
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
              }}
              variants={itemVariants}
              onClick={handleNav}
              className="text-3xl absolute right-[2%] top-[2%] hover:cursor-pointer"
            >
              X
            </motion.button>
            <motion.div
              className="h-[40%] flex justify-center"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              <div className="navMenu--links w-[100%] h-[100%] flex flex-col justify-center items-center flex-1 gap-10">
                <motion.ul className="flex flex-col h-[100%] justify-center gap-7">
                  <motion.li variants={itemVariants}>
                    <Link onClick={handleNav} className="text-sm" to="/">
                      POČETNA
                    </Link>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <Link onClick={handleNav} className="text-sm" to="/tehnike">
                      TEHNIKE
                    </Link>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <Link
                      onClick={handleNav}
                      className="text-sm"
                      to="/galerija"
                    >
                      GALERIJA
                    </Link>
                  </motion.li>
                </motion.ul>
              </div>
            </motion.div>
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
              className="navMenu--contacts flex flex-col"
            >
              <div className="nav__contact">
                <motion.ul>
                  <motion.li variants={itemVariants}>
                    <div className="kontakt__content--phone w-[100%] flex flex-col items-center md:flex-row">
                      <a href="tel:+381632748948">
                        <BsTelephoneFill className="nav-phone text-md text-main-green hover:text-white" />
                      </a>

                      <a href="tel:+381632748948"></a>
                      <span className="text-sm font-light">063/274-89-48</span>
                    </div>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <div className="kontakt__content--phone p-2 flex flex-col items-center md:flex-row">
                      <a href="https://www.instagram.com/molerski_radovi_milenko_kostic/">
                        {" "}
                        <AiFillInstagram className="nav-insta text-xl text-[#fa7e1e] hover:text-white" />
                      </a>
                      <span className="text-sm font-light">
                        @molerski.radovi.kostic
                      </span>{" "}
                    </div>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <div className="kontakt__content--phone p-2 flex flex-col w-[100%] items-center md:flex-row">
                      <a href="mailto:mile26a@gmail.com">
                        <MdEmail className="nav-mail text-xl text-[#bb001b] hover:text-white" />
                      </a>
                      <span className="text-sm font-light">
                        mile26a@gmail.com
                      </span>
                    </div>
                  </motion.li>
                </motion.ul>
              </div>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
