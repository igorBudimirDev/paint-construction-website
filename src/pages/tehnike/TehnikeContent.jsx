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
    <div className="tehnike__content bg-dark-gray-color flex flex-col items-center">
      <div className="tehnike__content__1 pb-10 flex flex-col">
        <h2 className="text-6xl pb-10 text-white font-light">BETON TEHNIKA</h2>
        <div>
          <img src={BetonImg} alt="" className="pb-5" />
        </div>
        <p className="text-white text-2xl font-light">
          Beton efekat je jako popularna dekorativna <br />
          tehnika današnjice.Pomoću palete svih <br />
          nijansi možete stvoriti moderan izgled
          <br /> betona u vašem prostoru.
        </p>
      </div>

      <div className="tehnike__content__2 flex w-[1022px] justify-between items-center">
        <div className="tehnike_-content__2--imgdiv">
          <h2 className="text-6xl pb-10 text-white font-light">SAHARA</h2>
          <img src={SaharaImg} alt="" />
        </div>
        <p className="text-white text-2xl font-light">
          Sahara je namenjena za <br />
          zaštitu i dekoraciju <br />
          unutrašnjih zidnih <br />
          površina, gde je <br />
          potrebno kreirati <br />
          uzbudljiv i dinamičan <br />
          efekat. Može se tonirati <br />
          na Maximix <br />
          sistemu prema ton karti <br />
          Maxidecor Sahara.
        </p>
      </div>

      <div className="tehnike__content__3 pb-10 flex flex-col">
        <h2 className="text-6xl pb-10 text-white font-light">ISTINTO</h2>
        <div>
          <img src={IstintoImg} alt="" className="pb-5" />
        </div>
        <p className="text-white text-2xl font-light">
          Dekorativni materijal Istinto predstavlja jedinstvo <br />
          između prirode, arhitekture i dizajna, a svaki zid <br />
          pretvara u unikatno umetničko delo. Ovaj proizvod na <br />
          bazi kreča, sitnih čestica mermera i prirodnih minerala <br />
          dozvoljava vam da na zidu stvorite reljefnu ili poliranu <br />
          površinu i na taj način u samo jednom premazu <br />
          pokrijete manje nepravilnosti zida.
        </p>
      </div>

      <div className="tehnike__content__3 flex w-[1022px] flex-row-reverse justify-between items-center">
        <div className="tehnike_-content__3--imgdiv">
          <h2 className="text-6xl pb-10 text-white font-light">CALCE CRUDA</h2>
          <img src={CalceImg} alt="" />
        </div>
        <p className="text-white text-2xl font-light">
          Calce cruda je porozan <br />
          dekorativni premaz sa veoma <br />
          prirodnim osećajem.Formulisan <br />
          je kombinacijom hidratisanog <br />
          kreča i prečišćene gline, što daje <br />
          efekat rezbarenja.
        </p>
      </div>

      <div className="tehnike__content__4 flex w-[1022px] justify-between items-center">
        <div className="tehnike_-content__4--imgdiv">
          <h2 className="text-6xl pb-10 text-white font-light">OCEANO</h2>
          <img src={OceanoIng} alt="" />
        </div>
        <p className="text-white text-2xl font-light">
          Tehnika oceano nam pruža <br />
          osećaj plutanja morskim <br />
          talasima, što je čini jednom od <br />
          ikona dekorativnih tehnika.
        </p>
      </div>

      <div className="tehnike__content__5 flex w-[1022px] flex-row-reverse justify-between items-center">
        <div className="tehnike_-content__5--imgdiv">
          <h2 className="text-6xl pb-10 text-white font-light">OTTOCENTO</h2>
          <img src={OttocentoImg} alt="" />
        </div>
        <p className="text-white text-2xl font-light">
          Ottocento je boja na vodenoj <br />
          bazi, za zidove za unutrašnju <br />
          dekorativnu upotrebu.Posebno <br />
          je osmišljena kako bi se prostoru <br />
          dala visoko prefinjena <br />
          elegancija.Ottocento <br />
          je napravljen najsavremenijom <br />
          tehnologijom i garantuje <br />
          trajnost.
        </p>
      </div>
    </div>
  );
};

export default TehnikeContent;
