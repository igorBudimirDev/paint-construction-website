import BetonImg from "./tehnike-assets/beton.png";
import CalceImg from "./tehnike-assets/calce.png";
import HoblioImg from "./tehnike-assets/hoblio.png";
import IstintoImg from "./tehnike-assets/istinto.png";
import LajsneImg from "./tehnike-assets/lajsne.png";
import OceanoIng from "./tehnike-assets/oceano.png";
import OttocentoImg from "./tehnike-assets/ottocento.png";
import SaharaImg from "./tehnike-assets/sahara.png";

const TehnikeContent = () => {
  return (
    <div className="tehnike__content bg-dark-gray-color py-11 flex flex-col gap-10 items-center">
      <div className="tehnike__content__1 pb-11 flex flex-col items-center">
        <h2 className="text-3xl pb-10 text-white text-center font-light md:text-left md:text-4xl lg:text-6xl">
          BETON TEHNIKA
        </h2>
        <div>
          <img src={BetonImg} alt="" className="pb-10" />
        </div>
        <p className="text-white text-xl font-light text-center px-5 md:max-w-[30%] md:px-0 md:text-left md:text-2xl">
          Beton efekat je jako popularna dekorativna tehnika današnjice.Pomoću
          palete svih nijansi možete stvoriti moderan izgled betona u vašem
          prostoru.
        </p>
      </div>

      <div className="tehnike__content__2 flex  pb-11 flex-col justify-between items-center md:flex-row md:w-[100%] lg:max-w-[1022px]">
        <div className="tehnike_-content__2--imgdiv">
          <h2 className="text-3xl pb-10 text-white text-center font-light md:text-left md:text-4xl lg:text-6xl">
            SAHARA
          </h2>
          <img src={SaharaImg} alt="" />
        </div>
        <p className="text-white px-5 text-xl text-center font-light md:px-0 md:max-w-[30%] md:text-left md:text-2xl">
          Sahara je namenjena za zaštitu i dekoraciju unutrašnjih zidnih
          površina, gde je potrebno kreirati uzbudljiv i dinamičan efekat. Može
          se tonirati na Maximix sistemu prema ton karti Maxidecor Sahara.
        </p>
      </div>

      <div className="tehnike__content__3 pb-11 flex flex-col items-center">
        <h2 className="text-3xl pb-10 text-white text-center font-light md:text-left md:text-4xl lg:text-6xl">
          ISTINTO
        </h2>
        <div>
          <img src={IstintoImg} alt="" className="pb-5" />
        </div>
        <p className="text-white text-xl px-5 text-center font-light md:px-0 md:max-w-[30%] md:text-2xl md:text-left">
          Dekorativni materijal Istinto predstavlja jedinstvo između prirode,
          arhitekture i dizajna, a svaki zid pretvara u unikatno umetničko delo.
          Ovaj proizvod na bazi kreča, sitnih čestica mermera i prirodnih
          minerala dozvoljava vam da na zidu stvorite reljefnu ili poliranu
          površinu i na taj način u samo jednom premazu pokrijete manje
          nepravilnosti zida.
        </p>
      </div>

      <div className="tehnike__content__3 flex max-w-[1022px] pb-11 flex-col justify-between items-center gap-10 md:flex-row-reverse">
        <div className="tehnike_-content__3--imgdiv">
          <h2 className="text-3xl pb-10 text-white text-center font-light md:text-left md:text-4xl lg:text-6xl">
            CALCE CRUDA
          </h2>
          <img src={CalceImg} alt="" />
        </div>
        <p className="text-white text-xl px-5 font-light text-center md:px-0 md:max-w-[30%] md:text-2xl md:text-left">
          Calce cruda je porozan
          dekorativni premaz sa veoma
          prirodnim osećajem.Formulisan
          je kombinacijom hidratisanog
          kreča i prečišćene gline, što daje
          efekat rezbarenja.
        </p>
      </div>

      <div className="tehnike__content__4 flex max-w-[1022px] pb-11 flex-col justify-between items-center gap-10 md:flex-row">
        <div className="tehnike_-content__4--imgdiv">
          <h2 className="text-3xl pb-10 text-white text-center font-light md:text-4xl md:text-left lg:text-6xl">
            OCEANO
          </h2>
          <img src={OceanoIng} alt="" />
        </div>
        <p className="text-white text-xl px-5 font-light text-center md:max-w-[30%] md:px-0 md:text-2xl md:text-left">
          Tehnika oceano nam pruža
          osećaj plutanja morskim
          talasima, što je čini jednom od
          ikona dekorativnih tehnika.
        </p>
      </div>

      <div className="tehnike__content__5 flex max-w-[1022px] pb-11 flex-col justify-between items-center gap-10 md:flex-row-reverse">
        <div className="tehnike_-content__5--imgdiv">
          <h2 className="text-3xl pb-10 text-white font-light text-center md:text-left md:text-4xl lg:text-6xl">
            OTTOCENTO
          </h2>
          <img src={OttocentoImg} alt="" />
        </div>
        <p className="text-white text-xl font-light px-5 text-center md:px-0 md:max-w-[30%] md:text-2xl md:text-left">
          Ottocento je boja na vodenoj
          bazi, za zidove za unutrašnju
          dekorativnu upotrebu.Posebno
          je osmišljena kako bi se prostoru
          dala visoko prefinjena
          elegancija.Ottocento
          je napravljen najsavremenijom
          tehnologijom i garantuje
          trajnost.
        </p>
      </div>

      <div className="tehnike__content__6 pb-10 flex flex-col items-center">
        <h2 className="text-3xl pb-10 text-white text-center font-light md:text-4xl md:text-right lg:text-6xl">
          HOBLIO
        </h2>
        <div className="">
          <img src={HoblioImg} alt="" className="pb-5" />
        </div>
      <div className="md:max-w-[30%]">
        <p className="text-white text-xl px-5 font-light text-center md:px-0 md:text-left md:text-xl">
          Hoblio je posebno prijatan
          dekorativni materijal za
          unutrašnju dekoraciju iz
          Antiche Terre Fiorentine linije,
          razvijen da bi zidovi Vašeg
          prostora dobili prijatan i
          šarmantan izgled. On
          kombinuje lepotu i trajnost
          zida koji treba da opstane tokom godina.
        </p>
        </div>
      </div>

      <div className="tehnike__content__7 pb-10 flex flex-col">
        <h2 className="text-3xl pb-10 text-white text-center font-light md:text-4xl md:text-right lg:text-6xl">
          DEKORATIVNE LAJSNE
        </h2>
        <div>
          <img src={LajsneImg} alt="" className="pb-5" />
        </div>
      </div>
    </div>
  );
};

export default TehnikeContent;
