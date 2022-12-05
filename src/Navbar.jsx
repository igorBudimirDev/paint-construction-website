import { Link } from "react-router-dom";
import KosticLogo from "./assets/logo.png";
import { HiMenu } from "react-icons/hi";
const Navbar = () => {
  return (
    <div className=" absolute top-0 right-0 left-0 z-10">
      <nav className="flex justify-around static text-sm pt-8 ">
        <div className="max-w-[150px] flex flex-col items-center">
          <img className="max-w-[50%]" src={KosticLogo} alt="" />
          <span className="logo__span text-white text-[20px]">
            Molerski radovi Kostić
          </span>
        </div>
        <div className="hidden md:flex">
          <Link className="mx-[7px] text-[15px] text-white" to="/">
            Početna
          </Link>
          <Link className="mx-[7px] text-[15px] text-white" to="/galerija">
            Galerija
          </Link>
          <Link className="mx-[7px] text-[15px] text-white" to="/usluge">
            Usluge
          </Link>
          <Link className="mx-[7px] text-[15px] text-white" to="/kontakt">
            Kontakt
          </Link>
        </div>
        <div className="block text-black-500 md:hidden">
          <HiMenu />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
