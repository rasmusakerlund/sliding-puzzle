import React, { useReducer, useEffect } from 'react';
import Tile from '../tile/tile';
import {
  getSolvedState,
  boardReducer,
  shuffleBoard,
  boardsAreEqual,
} from './board-state-utils';

const Board = () => {
  const X_STEPS = 4;
  const Y_STEPS = 4;
  const solvedState = getSolvedState(X_STEPS, Y_STEPS);
  const [state, dispatch] = useReducer(boardReducer, shuffleBoard(solvedState));
  const isSolved = boardsAreEqual(solvedState, state);
  const src = 'https://source.unsplash.com/random/1080x1080';
  const style = {
    position: 'relative',
    width: '80vmin',
    margin: '0 auto',
  };

  useEffect(() => {
    const eventListener = (event) => {
      if (!isSolved) {
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
        style={{
          transition: 'opacity 1s',
          opacity: isSolved ? '1' : '0.25',
          width: '100%',
          display: 'block',
        }}
      />
      {state.map((tile) => (
        <Tile {...tile} src={src} />
      ))}
    </div>
  );
};

export default Board;
