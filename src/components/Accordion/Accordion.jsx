import React, { useState } from 'react';
import './Accordion.css';

const Accordion = ({ data }) => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    setSelected(selected === i ? null : i);
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((item, i) => (
          <div className={`item ${selected === i ? 'show' : ''}`} key={i}>
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.Label}</h2>
              <span>{selected === i ? '-' : '+'}</span>
            </div>
            <div className={`content ${selected === i ? "show" : ""}`}>
              {item.Content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
