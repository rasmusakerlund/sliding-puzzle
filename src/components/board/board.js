import React from 'react';
import Tile from '../tile/tile';

const createInitialState = (xSteps, ySteps) => {
  const state = [];

  for (let i = 0; i < xSteps * ySteps - 1; i++) {
    state.push({
      id: i,
      boardX: i % xSteps,
      boardY: Math.floor(i / xSteps),
      imgX: i % xSteps,
      imgY: Math.floor(i / xSteps),
    });
  }

  return state;
};

const Board = () => {
  const X_STEPS = 3;
  const Y_STEPS = 4;
  const state = createInitialState(X_STEPS, Y_STEPS);

  const src = 'https://source.unsplash.com/random/800x600';
  const style = {
    position: 'relative',
    width: '80vmin',
    height: '60vmin',
    margin: '0 auto',
  };

  // useEffect(() => {
  //   const eventListener = (event) => {
  //     switch (event.key) {
  //       case 'ArrowLeft':
  //         setX(x - 1);
  //         break;
  //       case 'ArrowRight':
  //         setX(x + 1);
  //         break;
  //       case 'ArrowUp':
  //         setY(y - 1);
  //         break;
  //       case 'ArrowDown':
  //         setY(y + 1);
  //         break;
  //       default:
  //     }
  //   };

  //   document.addEventListener('keydown', eventListener);
  //   return () => {
  //     document.removeEventListener('keydown', eventListener);
  //   };
  // });

  const renderedTiles = state.map((tile) => {
    return <Tile {...tile} src={src} xSteps={X_STEPS} ySteps={Y_STEPS} />;
  });

  return (
    <div style={style}>
      <img
        src={src}
        alt="Board Background"
        style={{ opacity: '0.25', width: '100%' }}
      />
      {renderedTiles}
    </div>
  );
};

export default Board;
