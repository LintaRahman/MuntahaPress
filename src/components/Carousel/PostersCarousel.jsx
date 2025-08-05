import React, { useState, useEffect } from "react";
import "./PostersCarousel.css";

const PostersCarousel = ({ Header, PostersData , onImageClick }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  const next = () => {
    setIndex((prevIndex) => {
      const nextIndex = prevIndex + direction;

      if (nextIndex >= PostersData.length) {
        setDirection(-1);
        return prevIndex - 1;
      }

      if (nextIndex < 0) {
        setDirection(1);
        return prevIndex + 1;
      }

      return nextIndex;
    });
  };

  const manualNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % PostersData.length);
  };

  const manualPrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + PostersData.length) % PostersData.length);
  };

//   useEffect(() => {
//     const interval = setInterval(next, 7000);
//     return () => clearInterval(interval);
//   }, [direction, PostersData.length]);

  return (
    <div className="posters-carousel-container">
      <div className="posters-carousel-header">
        <h2>{Header}</h2>
      </div>

      <div className="posters-carousel-track">
        {PostersData.map((data, i) => {
          let position = "hiddenPosterSlide";

          if (i === index) {
            position = "activePosterSlide";
          } else if (i === (index - 1 + PostersData.length) % PostersData.length) {
            position = "prevPosterSlide";
          } else if (i === (index + 1) % PostersData.length) {
            position = "nextPosterSlide";
          }

          return (
            <div className={`poster-card ${position}`} key={i}
            //   className="poster-carousel-item"
              onClick={() => onImageClick(data.image)}>
              <div className="poster-image" >
                <img src={data.image} alt={data.name} />
              </div>
              <p className="name">{data.name}</p>
            </div>
          );
        })}
      </div>

      <div className="posters-carousel-controls">
        <button onClick={manualPrev}>←</button>
        <div className="dots">
          {PostersData.map((_, i) => (
            <span
              key={i}
              className={i === index ? "active" : ""}
              onClick={() => setIndex(i)}
            >
              ●
            </span>
          ))}
        </div>
        <button onClick={manualNext}>→</button>
      </div>
    </div>
  );
};

export default PostersCarousel;
