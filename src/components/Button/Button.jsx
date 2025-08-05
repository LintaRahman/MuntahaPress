import React from 'react';

const Button = ({ text, color, action, fill, borderColor , textcolor}) => {
  const buttonStyle = {
    backgroundColor: color || '#4CAF50', // Default color is green, you can change it
    // textTransform: 'uppercase',
    color: textcolor || '#fff',
    padding: '10px 20px',
    fontSize: '1rem',
  fontFamily: "Raleway",
    // borderRadius: '20px 0 20px 0',
    borderRadius: '50px',
    border: '2px solid',
    borderColor: borderColor,
    cursor: 'pointer',
    width: fill ? fill : 'auto', // Fill width if fill is true
  };

  const buttonHoverStyle = {
    backgroundColor: '#fff',
    color: color || '#4CAF50',
  };

  return (
    <button style={{ ...buttonStyle, ':hover': buttonHoverStyle }} onClick={action}>
      {text}
    </button>
  );
};

export default Button;
