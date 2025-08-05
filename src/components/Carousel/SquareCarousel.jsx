import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import './SquareCarousel.css'; // Import the CSS file

export default function SquareCarousel({ autoSlide = true, autoSlideInterval = 5000, slides }) {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="squarecarousel-container">
      <div
        className="squarecarousel-track"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="squarecarousel-slide">
            <img src={slide.img} alt="" />
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      {/* <div className="squarecarousel-controls">
        <button onClick={prev} className="squarecarousel-button">
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </button>
        <button onClick={next} className="squarecarousel-button">
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </button>
      </div> */}

      {/* Dots for indicator */}
      <div className="squarecarousel-indicators">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`squarecarousel-indicator ${curr === i ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
