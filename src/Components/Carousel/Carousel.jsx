import React from "react";
import carousel from "./carousel.scss";

const Carousel = () => {
  return (
    <>
      <div className="container">
        <div className="carousel">
          <div className="carousel-animation">
            <h1>
              Аксессуары для <br /> Iphone 13 Pro Max
            </h1>
            <img className="iphone" src="/iphone.png" alt="iphone 13" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
