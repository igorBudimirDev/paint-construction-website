import Sahara1 from "../../assets/sahara_1.png";
const GalleryContent = () => {
  let imgGallery = [
    { src: {Sahara1}, title: "img1" },
  ];
  const muda = () => {}
  return (
    <div className="gallery__content h-[2000px] w-[100%] bg-zinc-500 ">
      {imgGallery.map((index) => (
      <img src={index.src} title={index.title} width="250" height="250" />
      ))}
    </div>
  );
};

export default GalleryContent;
