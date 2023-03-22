import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import ColorSlider from './ColorSlider/index.jsx';

const App = () => {

  const [redValue, setRedValue] = useState(0);
  const [greenValue, setGreenValue] = useState(0);
  const [blueValue, setBlueValue] = useState(0);

  const handleValueChangeRed = (value) => {
    setRedValue(value);
  };

  const handleValueChangeGreen = (value) => {
    setGreenValue(value);
  };

  const handleValueChangeBlue = (value) => {
    setBlueValue(value);
  };

  return (
    <div className="color-panel">
      <h1>Mixér barev</h1>
      <div className="sliders">
        <ColorSlider baseColor="red" colorName="Červená" onValueChange={handleValueChangeRed} />
        <ColorSlider baseColor="green" colorName="Zelená" onValueChange={handleValueChangeGreen} />
        <ColorSlider baseColor="blue" colorName="Modrá" onValueChange={handleValueChangeBlue} />
      </div>
      <div className="color-box" id="color-box" style={{ backgroundColor: `rgb(${redValue}, ${greenValue}, ${blueValue})` }}></div>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
