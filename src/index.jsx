import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import ColorSlider from './ColorSlider/index.jsx';

const App = () => {
  return (
    <div className="color-panel">
      <h1>Mixér barev</h1>
      <div className="sliders">
        <ColorSlider baseColor="red" colorName="Červená"/>
        <ColorSlider baseColor="green" colorName="Zelená"/>
        <ColorSlider baseColor="blue" colorName="Modrá"/>
      </div>
      <div className="color-box" id="color-box"></div>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
