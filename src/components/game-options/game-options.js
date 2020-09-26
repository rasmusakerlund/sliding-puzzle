import React, { useState, useCallback } from 'react';
import './game-options.css';
import Board from '../board/board';

const getWidth = () => {
  return window.innerWidth > window.innerHeight
    ? window.innerWidth
    : window.innerHeight;
};

const getHeight = () => {
  return window.innerWidth > window.innerHeight
    ? window.innerHeight
    : window.innerWidth;
};

const GameOptions = () => {
  const [playConfig, setPlayConfig] = useState(null);

  const play = useCallback((xSteps, ySteps) => {
    const imageWidth = getWidth();
    const imageHeight = getHeight();
    setPlayConfig({
      imageWidth,
      imageHeight,
      xSteps,
      ySteps,
      src: `https://source.unsplash.com/random/${imageWidth}x${imageHeight}`,
    });
  }, []);

  if (playConfig) {
    return <Board {...playConfig} />;
  } else {
    return (
      <div className="game-options">
        <h1>Sliding Puzzle</h1>
        <hr></hr>
        <button className="game-options__btn" onClick={() => play(3, 3)}>
          Play 3x3
        </button>
        <button className="game-options__btn" onClick={() => play(4, 4)}>
          Play 4x4
        </button>
        <button className="game-options__btn" onClick={() => play(5, 3)}>
          Play 5x3
        </button>
      </div>
    );
  }
};

export default GameOptions;
