import React, { useState, useEffect } from "react";
import bg1 from "./pics/img1.jpeg"
import bg2 from "./pics/img2.jpeg"
import bg3 from "./pics/img3.jpeg"

const picsData = [
  bg1,bg2,bg3
];

function App() {
  const [pics, setPics] = useState(picsData);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < 0) {
      setIndex(pics.length - 1);
    }
    if (index > pics.length - 1) {
      setIndex(0);
    }
  }, [index, pics]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % pics.length);
    }, 5000);

    return () => {
      clearInterval(slider);
    };
  }, [pics]);

  return (
    <>
    <section style={{display:"flex",flexDirection:"column",height:"100vh"}}>

    <div className="header">
        <img src="" alt="LogoHere" className="logo"/>
        <img src="https://png.pngtree.com/png-vector/20230207/ourmid/pngtree-om-logo-design-with-flower-mandala-png-image_6590267.png" alt="Om" className="Om"/>
    </div>
      <div className="main">
        {pics.map((image, picIndex) => {
          let position = "nextSlide";
          if (picIndex === index) {
            position = "activeSlide";
          }
          if (picIndex === index - 1 || (index === 0 && picIndex === pics.length - 1)) {
            position = "lastSlide";
          }
          return (
            <article key={picIndex} className={position}>
              <img src={image} alt="Image" />
              <div className="content">
                <p>Smart, Secure, and Simple Auditing and Tax Solutions for Nepal.</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
    </>
  );
}

export default App;
