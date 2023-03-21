import React from 'react';
import './style.css';

const ColorSlider = ({ baseColor, colorName }) => {
  return (
    <>
      <label htmlFor={baseColor}>{colorName}</label>
      <input
        type="range"
        className={`slider slider--${baseColor}`}
        id={`${baseColor}Slider`}
        min="0"
        max="255"
        value="0"
      />
    </>
  );
};

export default ColorSlider;
