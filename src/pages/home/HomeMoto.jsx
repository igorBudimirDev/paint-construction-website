const Home_moto = () => {
  return (
    <div className="moto h-[70vh] bg-white">
      <div className="moto__content h-[70vh] w-100% flex justify-center items-center">
        <div className="moto__content--text flex flex-col items-center mobile:text-center">
          <h4 className="pb-5 text-2xl text-main-green md:text-3xl mobile:text-xl">BRZO. EFIKASNO. KVALITETNO.</h4>
          <h2 className="pb-5 text-3xl md:text-5xl">ULEPŠAĆEMO VAŠ DOM.</h2>
          <p className="text-xl text-center mobile:text-[1em]">Svesni smo da je u današnje vreme naći pravog majstora postala <br />
            noćna mora. Mi ćemo Vam pomoći u svakom koraku i osigurati Vas da <br />
             ćete biti zavovoljni krajnjim ishodom.</p>
        </div>
      </div>
    </div>
  )
}

export default Home_moto
