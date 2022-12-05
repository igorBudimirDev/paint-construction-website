import Istinto1 from "../../assets/istinto_1.png";
import Sahara1 from "../../assets/sahara_1.png";
const Home_tehnike = () => {
  return (
    <div className="container max-w-[100%] flex items-center justify-center">
      <div className="tehnike h-screen flex flex-col justify-center w-[80%]">
        <div className="tehnike__upper flex flex-col items-center justify-around md:items-start md:flex-row">
          <div className="istinto--container">
            <img src={Istinto1} alt="istinto" className="" />
          </div>
          <div className="tehnike__upper--text flex flex-col items-center justify-around md:items-center">
            <h4 className="text-main-green text-2xl md:text-4xl">Istinto</h4>
            <p className="text-center md:text-xl mobile:text-[10px]">
              Dekorativni materijal Istinto predstavlja jedinstvo
              <br />
              između prirode, arhitekture i dizajna, a svaki zid pretvara
              <br />
              u unikatno umetničko delo. Ovaj proizvod na bazi kreča,
              <br />
              sitnih čestica mermera i prirodnih minerala dozvoljava
              <br />
              vam da na zidu stvorite reljefnu ili poliranu površinu i na
              <br />
              taj način u samo jednom premazu pokrijete manje
              <br />
              nepravilnosti zida.
            </p>
          </div>
        </div>
        <div className="tehnike__lower flex flex-col items-center justify-around md:items-center md:flex-row-reverse">
          <div className="sahara--container">
            <img src={Sahara1} alt="sahara" className="" />
          </div>
          <div className="tehnike__lower--text flex flex-col items-center justify-center ">
            <h4 className="text-main-green text-2xl md:text-4xl">Sahara</h4>
            <p className="text-center md:text-xl mobile:text-[10px]">
              Sahara je namenjena za zaštitu i dekoraciju
              <br />
              unutrašnjih zidnih površina, gde je potrebno
              <br />
              kreirati uzbudljiv i dinamičan efekat. Može se
              <br /> tonirati na Maximix sistemu prema ton karti
              <br />
              Maxidecor Sahara.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_tehnike;
