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
import Done21 from "../../assets/gallery-assets/done 22.jpg";
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
    { id: 4, imgSrc: Done4 },
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
