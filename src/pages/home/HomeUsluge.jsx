const Home_usluge = () => {
  return (
    <div className="usluge h-screen bg-main-green flex justify-center items-center ">
      <div className="usluge__wrapper h-[70%] w-[80%] bg-[url('./assets/usluge-background.png')] bg-cover">
        <div className="usluge__wrapper__overlay h-[100%] w-[100%] bg-dark-white-overlay-color flex flex-col">
            <h3 className="pt-10 pb-20 text-center text-2xl font-light md:text-2xl md:text-left md:pl-[20px] lg:text-4xl mobile:text-xl mobile:pb-5">Usluge koje Vam nudimo</h3>
            <div className="cene-content h-[100%] flex flex-col items-center text-center ld:text-left ld:px-[20px] lg:flex-row mobile:text-[12px] mobile:justify-around">
              <div className="cene-content-main w-[60%] h-[100%] flex flex-col justify-around items-center text-center md:text-left">
              <span className="w-[100%] h-[] font-bold md:border-b md:border-b-underline-color lg:text-xl mobile:px-[10px]">GLETOVANJE</span> <br />
                <span className="w-[100%] h-[] font-bold md:border-b md:border-b-underline-color lg:text-xl mobile:px-[10px]">KREČENJE</span> <br />
                <span className="w-[100%] h-[] font-bold md:border-b md:border-b-underline-color lg:text-xl mobile:px-[10px]">IZRADA DEKORATIVNIH RADOVA SA DOMAĆIM I STRANIM MATERIJALIMA</span> <br />
                <span className="w-[100%] h-[] font-bold md:border-b md:border-b-underline-color lg:text-xl mobile:px-[10px]">GLETOVANJE POD RASVETOM</span> <br />
                <span className="w-[100%] h-[] font-bold md:border-b md:border-b-underline-color lg:text-xl mobile:px-[10px]">KREČENJE AKRILNIM BOJAMA OIKOS, VITEX, TIKURILA, MAXIMA, CASSATI</span> <br />
                <span className="w-[100%] h-[] font-bold md:border-b md:border-b-underline-color lg:text-xl mobile:px-[10px]">ZAŠTITA PROZORA PRED POČETAK RADOVA</span> <br />
                <span className="w-[100%] h-[] font-bold md:border-b md:border-b-underline-color lg:text-xl mobile:px-[10px]">POPRAVKA TAPETA</span> <br />
                <span className="w-[100%] h-[] font-bold md:border-b md:border-b-underline-color lg:text-xl mobile:px-[10px]">KRPLJENJE, ISPRAVLJANJE ZIDOVA MAŠINSKIM MALTERIMA</span> <br />
              </div>
                <div className="cene-content-add h-[100%] flex flex-col items-center justify-center">
                <h3 className="pt-10 text-center text-xl font-light md:text-xl md:text-left md:pl-[20px] mobile:text-xl mobile:pb-5">Organizacija građevinskih radova</h3>
                <div className="cene-content-add-main flex flex-col">
                <span className="w-[100%] h-[] font-bold text-center lg:text-xl mobile:px-[10px]">ELEKTROINSTALACIJE</span> <br />
                <span className="w-[100%] h-[] font-bold text-center lg:text-xl mobile:px-[10px]">GIPSANI RADOVI</span> <br />
                <span className="w-[100%] h-[] font-bold text-center lg:text-xl mobile:px-[10px]">HIDROINSTALACIJE</span> <br />
                <span className="w-[100%] h-[] font-bold text-center lg:text-xl mobile:px-[10px]">KERAMIKA</span> <br />
                </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home_usluge
