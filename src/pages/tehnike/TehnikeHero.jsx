import KosticVideo from "../../assets/kostic-video.mp4";
const TehnikeHero = () => {
  return (
    <div className="tehnike w-[100%] bg-white">
      <div className="tehnike__hero w-[100%] h-screen bg-[url('./assets/tehnike-bg.png')] bg-cover">
        <div className="tehnike__hero--overlay w-[100%] h-screen bg-overlay-color">
          <div className="tehnike__hero--container w-[100%] px-[2rem] pt-[5rem] h-screen flex flex-col items-center justify-center md:flex-row md:pt-10rem md:justify-around">
            <div className="tehnike__hero--container--text flex flex-col">
              <h1 className="text-white text-xl text-center font-normal pb-5 md:text-5xl md:text-left">
                Dekorativne tehnike
              </h1>
              <p className="text-white text-sm text-center pb-5 md:text-xl md:text-left md:pb-0">
                U mnogim slučajevima vaš prostor može izgledati prazno i dosadno{" "}
                <br />
                zato što mu fali tekstura.Predstavljamo Vam najpopularnije i{" "}
                <br />
                najbolje dekorativne tehnike koje će transformisati vaš <br />
                enterijer.
              </p>
            </div>
            <div className="tehnike__hero--container--video w-[50%] md:w-[50%] flex justify-center md:items-center lg:w-[25%]">
                <video controls src={KosticVideo}></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TehnikeHero;
