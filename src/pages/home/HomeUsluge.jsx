const Home_usluge = () => {
  return (
    <div className="usluge bg-main-green h-[1200px] flex justify-center items-center ">
      <div className="usluge__wrapper h-[70%] w-[80%] bg-[url('./assets/usluge-background.png')] bg-cover">
        <div className="usluge__wrapper__overlay h-[100%] w-[100%] bg-dark-white-overlay-color flex flex-col">
            <h3 className="pt-5 pb-p text-center text-xl font-light md:text-2xl md:text-left md:pl-[20px] lg:text-4xl mobile:text-xl mobile:pb-5">Usluge koje Vam nudimo</h3>
            <div className="cene-content h-[100%] flex flex-col items-center text-center ld:text-left lg:flex-row ">
              <div className="cene-content-main w-[100%] h-[100%] flex flex-col justify-around md:maxw-[60%] items-center text-center md:text-left">
                <span className="w-[100%] md:px-10 font-bold md:border-b md:border-b-underline-color lg:text-xl ">GLETOVANJE</span> <br />
                <span className="w-[100%] md:px-10 font-bold md:border-b text-sm md:border-b-underline-color lg:text-xl">KREČENJE</span> <br />
                <span className="w-[100%] md:px-10 font-bold md:border-b text-sm md:border-b-underline-color lg:text-xl">IZRADA DEKORATIVNIH RADOVA SA DOMAĆIM I STRANIM MATERIJALIMA</span> <br />
                <span className="w-[100%] md:px-10 font-bold md:border-b text-sm md:border-b-underline-color lg:text-xl">GLETOVANJE POD RASVETOM</span> <br />
                <span className="w-[100%] md:px-10 font-bold md:border-b text-sm md:border-b-underline-color lg:text-xl">KREČENJE AKRILNIM BOJAMA OIKOS, VITEX, TIKURILA, MAXIMA, CASSATI</span> <br />
                <span className="w-[100%] md:px-10 font-bold md:border-b text-sm md:border-b-underline-color lg:text-xl">ZAŠTITA PROZORA PRED POČETAK RADOVA</span> <br />
                <span className="w-[100%] md:px-10 font-bold md:border-b text-sm md:border-b-underline-color lg:text-xl">POPRAVKA TAPETA</span> <br />
                <span className="w-[100%] md:px-10 font-bold md:border-b text-sm md:border-b-underline-color lg:text-xl">KRPLJENJE, ISPRAVLJANJE ZIDOVA MAŠINSKIM MALTERIMA</span> <br />
              </div>
              <div className="cene-content-add flex flex-col items-center justify-start md:justify-center">
                <h3 className="pt-10 text-center text-xl font-light md:text-xl md:text-left md:pl-[20px] mobile:text-xl mobile:pb-5">Organizacija građevinskih radova</h3>
                <div className="cene-content-add-main flex flex-col">
                <span className="w-[100%] font-bold text-center lg:text-xl mobile:px-[10px]">ELEKTROINSTALACIJE</span> <br />
                <span className="w-[100%] font-bold text-center lg:text-xl mobile:px-[10px]">GIPSANI RADOVI</span> <br />
                <span className="w-[100%] font-bold text-center lg:text-xl mobile:px-[10px]">HIDROINSTALACIJE</span> <br />
                <span className="w-[100%] font-bold text-center lg:text-xl mobile:px-[10px]">KERAMIKA</span> <br />
                </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home_usluge
