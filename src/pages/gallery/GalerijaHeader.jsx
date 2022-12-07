import React from "react";

const GalerijaHeader = () => {
  return (
    <div className=" gallery w-[100%] h-[25rem] max-w-[100%] absolute bg-[url('./assets/galerija-overlay-img.png')]">
      <div className="gallery-overlay w-[100%] h-[25rem] absolute bg-overlay-color flex justify-center items-center">
        <h1 className="text-white text-6xl font-bold">NAŠA GALERIJA</h1>
      </div>
    </div>
  );
};

export default GalerijaHeader;
