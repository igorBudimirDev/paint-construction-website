import { Link } from "react-router-dom";
import KosticLogo from "./assets/logo.png";
import { HiMenu } from "react-icons/hi";
import { useState, useEffect } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
const Navbar = () => {
  const bodyStyle = document.body.style;
  const [isLocked, setIsLocked] = useState(bodyStyle.overflow === "hidden");

  useEffect(() => {
    bodyStyle.overflowY = isLocked ? "hidden" : "auto";
  });

  let [navMenu, setNavMenu] = useState(false);
  const handleNav = () => {
    setNavMenu(!navMenu);
    setIsLocked(!isLocked);
  };
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
            <span className="mt-2 md:mt-0 md:ml-5 md:text-sm font-light">
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
            <span className="text-[1em] sm:text-2xl mt-2 md:mt-0 md:ml-5 md:text-sm font-light">
              @molerski.radovi.kostic
            </span>{" "}
          </div>
          <div className="kontakt__content--phone p-2 flex flex-col w-[100%] items-center md:flex-row">
            <a href="mailto:mile26a@gmail.com">
              <MdEmail className="nav-mail text-xl text-[#bb001b] hover:text-white" />
            </a>
            <span className="text-[1em] sm:text-2xl mt-2 md:mt-0 md:ml-5 md:text-sm font-light">
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
        <div className="w-[30%]block text-black-500 md:hidden">
          <HiMenu
            onClick={handleNav}
            className="text-4xl text-white hover:cursor-pointer"
          />
        </div>
      </nav>
      <div
        className="navMenu w-[100%] h-screen bg-menu-overlay-color absolute top-0"
        style={{
          display: navMenu ? "flex" : "none",
        }}
      >
        <button
          onClick={handleNav}
          className="text-5xl absolute right-20 top-[10%] hover:cursor-pointer"
        >
          X
        </button>
        <div className="navMenu--links h-screen w-[100%] flex flex-col justify-center items-center gap-10">
          <Link onClick={handleNav} className="text-4xl" to="/">
            POČETNA
          </Link>
          <Link onClick={handleNav} className="text-4xl" to="/tehnike">
            TEHNIKE
          </Link>
          <Link onClick={handleNav} className="text-4xl" to="/galerija">
            GALERIJA
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
