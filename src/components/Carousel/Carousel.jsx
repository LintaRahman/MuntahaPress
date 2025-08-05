import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import './Carousel.css'; // Import the CSS file

export default function Carousel({ autoSlide = true, autoSlideInterval = 6000, slides }) {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="carousel-container">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${curr * 100}%)`, maxHeight: '100vh' }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <img src={slide.image} alt="" />
            {/* <div className="carousel-text">
              <h1>{slide.text}</h1>
            </div> */}
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      {/* <div className="carousel-controls">
        <button onClick={prev} className="carousel-button">
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </button>
        <button onClick={next} className="carousel-button">
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </button>
      </div> */}

      {/* Dots for indicator */}
      <div className="carousel-indicators">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`carousel-indicator ${curr === i ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
