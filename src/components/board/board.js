import React, { useEffect, useState } from 'react';
import Tile from '../tile/tile';

const Board = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const src = 'https://source.unsplash.com/random/800x800';
  const style = {
    position: 'relative',
    width: '80vmin',
    height: '80vmin',
    margin: '0 auto',
  };

  useEffect(() => {
    const eventListener = (event) => {
      switch (event.key) {
        case 'ArrowLeft':
          setX(x - 1);
          break;
        case 'ArrowRight':
          setX(x + 1);
          break;
        case 'ArrowUp':
          setY(y - 1);
          break;
        case 'ArrowDown':
          setY(y + 1);
          break;
        default:
      }
    };

    document.addEventListener('keydown', eventListener);
    return () => {
      document.removeEventListener('keydown', eventListener);
    };
  });

  return (
    <div style={style}>
      <img
        src={src}
        alt="Board Background"
        style={{ opacity: '0.15', width: '100%' }}
      />
      <Tile
        src={src}
        boardX={x}
        boardY={y}
        imgX={1}
        imgY={2}
        xSteps={4}
        ySteps={4}
      ></Tile>
    </div>
  );
};

export default Board;
