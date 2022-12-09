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
        <p className="text-white text-xl font-light">
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
        <p className="text-white text-xl font-light">
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
        <p className="text-white text-xl font-light">
          Dekorativni materijal Istinto predstavlja jedinstvo <br />
          između prirode, arhitekture i dizajna, a svaki zid <br />
          pretvara u unikatno umetničko delo. Ovaj proizvod na <br />
          bazi kreča, sitnih čestica mermera i prirodnih minerala <br />
          dozvoljava vam da na zidu stvorite reljefnu ili poliranu <br />
          površinu i na taj način u samo jednom premazu <br />
          pokrijete manje nepravilnosti zida.
        </p>
      </div>
    </div>
  );
};

export default TehnikeContent;
