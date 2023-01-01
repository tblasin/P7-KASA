import React, { useState } from 'react';
import "../../LogementData/Logements.json";
import "../Carrousel/carrousel.css";
import ArrowLeft from "../../assets/img/ArrowLeft.svg"
import ArrowRight from "../../assets/img/ArrowRight.svg"


export default function Carrousel({ slides }) {
    const [currentImage, setCurrentImage] = useState(0);
  
    const totalImages = slides.length;
  
    const previousSlide = () => {
      setCurrentImage(currentImage === 0 ? totalImages - 1 : currentImage - 1);
    };
  
    const previousArrow = <img src={ArrowLeft} alt="Arrow left" />;
  
    const nextSlide = () => {
      setCurrentImage(currentImage === totalImages - 1 ? 0 : currentImage + 1);
    };
  
    const nextArrow = <img src={ArrowRight} alt="Arrow right" />;
  
    return (
      <div className="Carrousel">
        <div className="containerArrow">
          {totalImages > 1 && (
            <button onClick={previousSlide} className="previousButton">
              {previousArrow}
            </button>
          )}
  
          {totalImages > 1 && (
            <button onClick={nextSlide} className="nextButton">
              {nextArrow}
            </button>
          )}
        </div>
  
        {slides.map((slide, index) => {
          return (
            <div key={index} className="SliderImage">
              {index === currentImage && (
                <img className="imageSlide" src={slide} alt="Slider" />
              )}
            </div>
          );
        })}
  
        {totalImages > 1 && (
          <div className="counterContainer">
            {" "}
            <p className="counter">
              {currentImage+1} / {totalImages}
            </p>
          </div>
        )}
      </div>
    );
  }
  
  