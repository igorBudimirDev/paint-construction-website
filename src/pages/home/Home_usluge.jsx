const Home_usluge = () => {
  return (
    <div className="usluge h-screen bg-main-green flex justify-center items-center ">
      <div className="usluge__wrapper h-[70%] w-[80%] bg-[url('./assets/usluge-background.png')] bg-cover">
        <div className="usluge__wrapper__overlay h-[100%] w-[100%] bg-dark-white-overlay-color flex flex-col">
            <h3 className="pt-10 pb-20 text-center text-2xl font-light md:text-4xl md:text-left md:pl-[20px]">Usluge koje Vam nudimo</h3>
            <div className="cene-content flex flex-col items-center text-center md:text-left md:px-[20px]">
                <span className="w-[100%] h-[] font-bold md:border md:border-b-underline-color md:text-xl">GLETOVANJE</span> <br />
                <span className="w-[100%] h-[] font-bold md:border md:border-b-underline-color md:text-xl">KREČENJE</span> <br />
                <span className="w-[100%] h-[] font-bold md:border md:border-b-underline-color md:text-xl">IZRADA DEKORATIVNIH RADOVA SA DOMAĆIM I STRANIM MATERIJALIMA</span> <br />
                <span className="w-[100%] h-[] font-bold md:border md:border-b-underline-color md:text-xl">GLETOVANJE POD RASVETOM</span> <br />
                <span className="w-[100%] h-[] font-bold md:border md:border-b-underline-color md:text-xl">KREČENJE AKRILNIM BOJAMA OIKOS, VITEX, TIKURILA, MAXIMA, CASSATI</span> <br />
                <span className="w-[100%] h-[] font-bold md:border md:border-b-underline-color md:text-xl">ZAŠTITA PROZORA PRED POČETAK RADOVA</span> <br />
                <span className="w-[100%] h-[] font-bold md:border md:border-b-underline-color md:text-xl">POPRAVKA TAPETA</span> <br />
                <span className="w-[100%] h-[] font-bold md:border md:border-b-underline-color md:text-xl">KRPLJENJE, ISPRAVLJANJE ZIDOVA MAŠINSKIM MALTERIMA</span> <br />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home_usluge
