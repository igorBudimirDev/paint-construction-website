const HomeHero = () => {
  const scrollToSection = () => {
    const uslugeItem = document.getElementsByClassName("usluge");
    console.warn(uslugeItem[0]);
    uslugeItem[0].scrollIntoView();
  };
  const scrollToKontakt = () => {
    const kontaktItem = document.getElementsByClassName("kontakt")
    kontaktItem[0].scrollIntoView();
  }
  return (
    <div className="hero w-[100%] bg-[url('./assets/mob-bg.jpg')] bg-cover md:bg-[url('./assets/hero-background.png')]">
      <div className="hero__container h-screen flex justify-center items-center bg-overlay-color">
        <div className="hero__container__content flex flex-col justify-center items-center">
          <div className="hero__container__content--headings flex flex-col items-center">
            <h2 className="pb-4 text-white text-3xl md:text-5xl mobile:text-2xl">
              Molersko-dekorativni radovi
            </h2>
            <h1 className="pb-4 text-white text-7xl font-bold tracking-wide md:text-8xl">
              KOSTIĆ
            </h1>
          </div>
          <div className="hero__container__content--buttons flex gap-6 md:flex-row md:gap-6">
            <button className="w-[120px] px-3 py-1 mx-1 border-solid border-white border-2 text-[20px] text-white hover:bg-white-overlay-color hover:text-black"
            onClick={scrollToKontakt}
            >
              Kontakt
            </button>
  
            <button
              className="w-[120px] px-3 py-1 mx-1 border-solid border-white border-2 text-[20px] text-white hover:bg-white-overlay-color hover:text-black"
              onClick={scrollToSection}
            >
              Usluge
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
