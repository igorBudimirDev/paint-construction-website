import React from "react";
import KosticLogo from "./assets/logo.png";
import { Link } from "react-router-dom";
import CustomIG from "./assets/instagram-icon.png";
import CustomMail from "./assets/gmail-icon.png";
import CustomPhone from "./assets/phone-call-icon.png";
const Footer = () => {
  return (
    <div className="footer bg-dark-gray-color border-t-white border-t flex z-20 mt-auto">
      <div className="footer__content w-[100%] h-[300px] flex flex-col justify-around items-center md:flex-row">
        <div className="footer__content__left pt-2 flex flex-col gap-5">
          <Link className="flex flex-col items-center" to="/">
            <img className="max-w-[50%]" src={KosticLogo} alt="" />
            <span className="logo__span text-white text-[15px] md:text-[25px]">
              Molerski radovi Kostić
            </span>
          </Link>
          <div className="footer__content__left--links flex  gap-4 md:flex-col">
            <Link to="/galerija" className="text-md text-white">
              Galerija
            </Link>
            <Link to="/tehnike" className="text-md text-white">
              Tehnike
            </Link>
          </div>
        </div>
        <div className="footer__content__middle pb-10 flex flex-col justify-end items-center md:h-[100%]">
          <span className="mb-5 text-center text-md font-extralight text-white md:text-xl">
            Molersko dekorativni radovi Kostić, <br />
            2022
          </span>
          <span className=" text-center text-[12px] font-extralight text-white md:text-sm">
            Web Design & Dev by Igor
          </span>
        </div>
        <div className="footer__content__right flex items-center md:h-[80%] md:items-end">
          <div className="footer__content__right-icons w-[140px] flex justify-center pb-1 border-b-white border-b gap-2 md:h-[13%]">
            <a target="blank" href="tel:+381632748948">
              <img src={CustomPhone} alt="" />
            </a>
            <a
              target="blank"
              href="https://www.instagram.com/molerski_radovi_milenko_kostic/"
            >
              <img src={CustomIG} alt="" />
            </a>

            <a target="blank" href="/">
              <img src={CustomMail} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
