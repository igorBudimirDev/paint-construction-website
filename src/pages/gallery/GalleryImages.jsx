import "./gallery.css";
import Done1 from "../../assets/gallery-assets/done 1.jpg";
import Done2 from "../../assets/gallery-assets/done 2.jpg";
import Done3 from "../../assets/gallery-assets/done 3.jpg";
import Done4 from "../../assets/gallery-assets/done 4.webp";
import Done5 from "../../assets/gallery-assets/done 5.webp";
import Done6 from "../../assets/gallery-assets/done 6.webp";
import Done7 from "../../assets/gallery-assets/done 7.jpg";
import Done8 from "../../assets/gallery-assets/done 8.jpg";
import Done9 from "../../assets/gallery-assets/done 9.jpg";
import Done10 from "../../assets/gallery-assets/done 10.jpg";
import Done11 from "../../assets/gallery-assets/done 11.jpg";
import Done12 from "../../assets/gallery-assets/done 12.jpg";
import Done13 from "../../assets/gallery-assets/done 13.jpg";
import Done14 from "../../assets/gallery-assets/done 14.jpg";
import Done15 from "../../assets/gallery-assets/done 15.jpg";
import Done16 from "../../assets/gallery-assets/done 16.jpg";
import Done17 from "../../assets/gallery-assets/done 17.jpg";
import Done18 from "../../assets/gallery-assets/done 18.jpg";
import Done19 from "../../assets/gallery-assets/done 19.jpg";
import Done20 from "../../assets/gallery-assets/done 20.jpg";
import Done21 from "../../assets/gallery-assets/done 21.jpg";
import Done22 from "../../assets/gallery-assets/done 22.jpg";
import Done23 from "../../assets/gallery-assets/done 23.jpg";
import Done24 from "../../assets/gallery-assets/done 24.jpg";
import Done25 from "../../assets/gallery-assets/done 25.jpg";
import Done26 from "../../assets/gallery-assets/done 26.jpg";
import Done28 from "../../assets/gallery-assets/done 28.jpg";
import Done29 from "../../assets/gallery-assets/done 29.jpg";
import Done30 from "../../assets/gallery-assets/done 30.jpg";
import Done31 from "../../assets/gallery-assets/done 31.jpg";
import Done33 from "../../assets/gallery-assets/done 33.jpg";
import Done34 from "../../assets/gallery-assets/done 34.jpg";
import Done35 from "../../assets/gallery-assets/done 35.jpg";
import Done36 from "../../assets/gallery-assets/done 36.jpg";
import Done37 from "../../assets/gallery-assets/done 37.jpg";
import Done38 from "../../assets/gallery-assets/done 38.jpg";
import Done39 from "../../assets/gallery-assets/done 39.jpg";
import Done40 from "../../assets/gallery-assets/done 40.jpg";
import Done41 from "../../assets/gallery-assets/done 41.jpg";
import Done42 from "../../assets/gallery-assets/done 42.jpg";
import Done43 from "../../assets/gallery-assets/done 43.jpg";
import Done44 from "../../assets/gallery-assets/done 44.jpg";
import Done45 from "../../assets/gallery-assets/done 45.jpg";
import Done46 from "../../assets/gallery-assets/done 46.jpg";
import Done48 from "../../assets/gallery-assets/done 48.jpg";
import Done49 from "../../assets/gallery-assets/done 49.jpg";
import Done50 from "../../assets/gallery-assets/done 50.jpg";
import Done70 from "../../assets/gallery-assets/done 70.jpg";
const GalleryImages = () => {
  let data = [
    { id: 1, imgSrc: Done1 },
    { id: 2, imgSrc: Done2 },
    { id: 3, imgSrc: Done3 },
    { id: 5, imgSrc: Done5 },
    { id: 6, imgSrc: Done6 },
    { id: 7, imgSrc: Done7 },
    { id: 8, imgSrc: Done8 },
    { id: 9, imgSrc: Done9 },
    { id: 10, imgSrc: Done10 },
    { id: 11, imgSrc: Done11 },
    { id: 12, imgSrc: Done12 },
    { id: 13, imgSrc: Done13 },
    { id: 14, imgSrc: Done14 },
    { id: 15, imgSrc: Done15 },
    { id: 16, imgSrc: Done16 },
    { id: 17, imgSrc: Done17 },
    { id: 18, imgSrc: Done18 },
    { id: 19, imgSrc: Done19 },
    { id: 20, imgSrc: Done20 },
    { id: 21, imgSrc: Done21 },
    { id: 22, imgSrc: Done22 },
    { id: 23, imgSrc: Done23 },
    { id: 24, imgSrc: Done24 },
    { id: 25, imgSrc: Done25 },
    { id: 26, imgSrc: Done26 },
    { id: 28, imgSrc: Done28 },
    { id: 29, imgSrc: Done29 },
    { id: 30, imgSrc: Done30 },
    { id: 31, imgSrc: Done31 },
    { id: 33, imgSrc: Done33 },
    { id: 34, imgSrc: Done34 },
    { id: 35, imgSrc: Done35 },
    { id: 36, imgSrc: Done36 },
    { id: 37, imgSrc: Done37 },
    { id: 38, imgSrc: Done38 },
    { id: 39, imgSrc: Done39 },
    { id: 40, imgSrc: Done40 },
    { id: 41, imgSrc: Done41 },
    { id: 42, imgSrc: Done42 },
    { id: 43, imgSrc: Done43 },
    { id: 44, imgSrc: Done44 },
    { id: 45, imgSrc: Done45 },
    { id: 46, imgSrc: Done46 },
    { id: 48, imgSrc: Done48 },
    { id: 39, imgSrc: Done49 },
    { id: 50, imgSrc: Done50 },
    { id: 70, imgSrc: Done70 },
  ];
  return (
    <ul className="gallery__images">
      {data.map((img, index) => {
        return (
          <div className="images" key={index}>
            <img src={img.imgSrc} alt="" />
          </div>
        );
      })}
    </ul>
  );
};

export default GalleryImages;
