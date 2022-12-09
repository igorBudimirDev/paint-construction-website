import { AiFillInstagram } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
const Home_kontakt = () => {
  return (
    <div className="kontakt h-screen bg-dark-gray-color flex justify-center items-center ">
      <div className="kontakt__wrapper h-[70%] bg-white-overlay-color px-10 flex justify-center">
        <div className="h-[80%] w-[100%] flex items-center flex-col">
          <h3 className="pt-10 pb-20 text-center text-2xl font-light md:text-4xl md:pl-[20px] mobile:text-xl mobile:pb-5">
            Kontakt informacije
          </h3>
          <div className="kontakt__content h-[100%] flex flex-col items-center text-center md:px-[20px] justify-around">
            <div className="kontakt__content--phone border-2 rounded-lg p-2 flex flex-col items-center md:flex-row">
              <a href="tel:0632748948">
                <BsTelephoneFill className=" text-4xl" />
              </a>
              <a href="tel:0632748948">
                <span className="text-[1em] sm:text-2xl mt-2 md:mt-0 md:ml-5 md:text-4xl font-light">
                  063/274-89-48
                </span>
              </a>
            </div>
            <div className="kontakt__content--phone border-2 rounded-lg p-2 flex flex-col items-center md:flex-row">
              <a href="https://www.instagram.com/molerski_radovi_milenko_kostic/"> <AiFillInstagram className=" text-4xl" /></a>
             <a href="https://www.instagram.com/molerski_radovi_milenko_kostic/"> <span className="text-[1em] sm:text-2xl mt-2 md:mt-0 md:ml-5 md:text-4xl font-light">
                @molerski.radovi.kostic
              </span> </a>
            </div>
            <div className="kontakt__content--phone flex flex-col items-center md:flex-row">
              <MdEmail className=" text-4xl" />
              <span className="text-[1em] sm:text-2xl mt-2 md:mt-0 md:ml-5 md:text-4xl font-light">
                mile26a@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_kontakt;
