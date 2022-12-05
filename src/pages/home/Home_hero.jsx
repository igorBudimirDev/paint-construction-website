const Home_hero = () => {
  return (
    <div className="hero h-screen max-w-100% bg-[url('./assets/hero-background.png')]">
      <div className="hero__container h-screen max-w-100% flex justify-center items-center bg-overlay-color">
        <div className="hero__container__content flex flex-col justify-center items-center">
          <div className="hero__container__content--headings flex flex-col items-center">
            <h2 className="pb-4 text-white text-3xl md:text-5xl">
              Molersko-dekorativni radovi
            </h2>
            <h1 className="pb-4 text-white text-7xl font-bold tracking-wide md:text-8xl">
              KOSTIĆ
            </h1>
          </div>
          <div className="hero__container__content--buttons flex gap-6 md:flex-row md:gap-6">
            <button className="w-[120px] px-3 py-1 mx-1 border-solid border-white border-2 text-[20px] text-white hover:bg-white-overlay-color hover:text-black">
              Kontakt
            </button>
            <button className="w-[120px] px-3 py-1 mx-1 border-solid border-white border-2 text-[20px] text-white hover:bg-white-overlay-color hover:text-black">
              Usluge
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home_hero
