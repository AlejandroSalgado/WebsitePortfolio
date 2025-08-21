import React from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      <div className="grid-container">
        <div className="grid-line horizontal"></div>
        <div className="grid-line horizontal"></div>
        <div className="grid-line horizontal"></div>
        <div className="grid-line horizontal"></div>
        <div className="grid-line horizontal"></div>
        <div className="grid-line vertical"></div>
        <div className="grid-line vertical"></div>
        <div className="grid-line vertical"></div>
        <div className="grid-line vertical"></div>
        <div className="grid-line vertical"></div>
      </div>
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      <div className="glow-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;