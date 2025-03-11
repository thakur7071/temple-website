import React from "react";
import "./Hero.css";

const heroData = [
  { imgSrc: "https://tse3.mm.bing.net/th?id=OIP.l61sAJ0i6gMD3jNhKKr2ggHaKG&w=474&h=474&c=7", text: "Elegant Design" },
  { imgSrc: "https://tse2.mm.bing.net/th?id=OIP.sa9RKc1oR1tUkeoGtk19eAHaJv&w=474&h=474&c=7", text: "Premium Quality" },
  { imgSrc: "https://tse4.mm.bing.net/th?id=OIP.p_IEm82Sw_iWpiTmD68IcgHaJV&w=474&h=474&c=7", text: "Modern Aesthetic" },
  { imgSrc: "https://tse4.mm.bing.net/th?id=OIP.Wj4V0Q87dfJCA-lHleBDwgHaJU&w=474&h=474&c=7", text: "Timeless Appeal" },
  { imgSrc: "https://tse3.mm.bing.net/th?id=OIP.l61sAJ0i6gMD3jNhKKr2ggHaKG&w=474&h=474&c=7", text: "Elegant Design" },
  { imgSrc: "https://tse2.mm.bing.net/th?id=OIP.sa9RKc1oR1tUkeoGtk19eAHaJv&w=474&h=474&c=7", text: "Premium Quality" },
  { imgSrc: "https://tse4.mm.bing.net/th?id=OIP.p_IEm82Sw_iWpiTmD68IcgHaJV&w=474&h=474&c=7", text: "Modern Aesthetic" },
  { imgSrc: "https://tse4.mm.bing.net/th?id=OIP.Wj4V0Q87dfJCA-lHleBDwgHaJU&w=474&h=474&c=7", text: "Timeless Appeal" }

];

const Hero = () => {
  return (
    <>    <section className="hero">
      <div className="hero__container">
        {heroData.map((item, index) => (
          <div className="hero__card" key={index}>
            <img src={item.imgSrc} alt={item.text} className="hero__image" />
            <p className="hero__text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>

<hr/>

<div className="hero-img">
<img src="http://www.oneyogaglobal.com/wp-content/uploads/2016/07/Bali-Temple-Banner.jpg"/>
</div>
</>

  );
};

export default Hero;
