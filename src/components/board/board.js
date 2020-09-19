import React, { useReducer, useEffect } from 'react';
import Tile from '../tile/tile';
import { getSolvedState, boardReducer } from './board-state-utils';

const Board = () => {
  const X_STEPS = 2;
  const Y_STEPS = 3;
  const [state, dispatch] = useReducer(
    boardReducer,
    getSolvedState(X_STEPS, Y_STEPS)
  );
  const src = 'https://source.unsplash.com/random/800x600';
  const style = {
    position: 'relative',
    width: '80vmin',
    height: '60vmin',
    margin: '0 auto',
  };

  useEffect(() => {
    const eventListener = (event) => {
      switch (event.key) {
        case 'ArrowLeft':
          dispatch({ type: 'ARROW_LEFT' });
          break;
        case 'ArrowRight':
          dispatch({ type: 'ARROW_RIGHT' });
          break;
        case 'ArrowUp':
          dispatch({ type: 'ARROW_UP' });
          break;
        case 'ArrowDown':
          dispatch({ type: 'ARROW_DOWN' });
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
        style={{ opacity: '0.25', width: '100%' }}
      />
      {state.map((tile) => (
        <Tile {...tile} src={src} />
      ))}
    </div>
  );
};

export default Board;
