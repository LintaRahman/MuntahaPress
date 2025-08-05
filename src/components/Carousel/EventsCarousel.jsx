import React from "react";
import PropTypes from "prop-types";
import './EventsCarousel.css';

const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const EventsCarousel = ({ data, onImageClick }) => {
  const slides = chunkArray(data, 3);

  return (
    <div className="events-carousel">
      {slides.map((slide, idx) => (
        <div key={idx} className="events-carousel-slide">
          {slide.map((item, index) => (
            <div
              key={index}
              className="events-carousel-item"
              onClick={() => onImageClick(item.image)}
            >
              <img src={item.image} alt={item.alt} className="events-carousel-img" />
              <p className="events-carousel-title">{item.title}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

EventsCarousel.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.string,
      alt: PropTypes.string,
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default EventsCarousel;
