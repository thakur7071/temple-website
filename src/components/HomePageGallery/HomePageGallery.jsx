import React from "react";
import "./HomePageGallery.css"
const HomePageGallery = () => {
  const images = [
    { imgSrc: "https://tse3.mm.bing.net/th?id=OIP.l61sAJ0i6gMD3jNhKKr2ggHaKG&w=474&h=474&c=7"},
    { imgSrc: "https://tse2.mm.bing.net/th?id=OIP.sa9RKc1oR1tUkeoGtk19eAHaJv&w=474&h=474&c=7"},
    { imgSrc: "https://tse4.mm.bing.net/th?id=OIP.p_IEm82Sw_iWpiTmD68IcgHaJV&w=474&h=474&c=7"},
    { imgSrc: "https://tse4.mm.bing.net/th?id=OIP.Wj4V0Q87dfJCA-lHleBDwgHaJU&w=474&h=474&c=7"},
    { imgSrc: "https://tse3.mm.bing.net/th?id=OIP.l61sAJ0i6gMD3jNhKKr2ggHaKG&w=474&h=474&c=7"},
    { imgSrc: "https://tse2.mm.bing.net/th?id=OIP.sa9RKc1oR1tUkeoGtk19eAHaJv&w=474&h=474&c=7"},
    { imgSrc: "https://tse3.mm.bing.net/th?id=OIP.l61sAJ0i6gMD3jNhKKr2ggHaKG&w=474&h=474&c=7"},
    { imgSrc: "https://tse2.mm.bing.net/th?id=OIP.sa9RKc1oR1tUkeoGtk19eAHaJv&w=474&h=474&c=7"},  

];




  return (
    <>
    <div className="gallery-heading">
        <h2>Gallery</h2>
    </div>
    <div className="home-gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img
            src={image.imgSrc}
            alt={image.text}
            className="home-gallery-img"
          />
          <p>{image.text}</p>
        </div>
      ))}
    </div>

    </>
  );
};

export default HomePageGallery;
