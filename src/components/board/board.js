import React, { useReducer, useEffect } from 'react';
import Tile from '../tile/tile';
import {
  getSolvedState,
  boardReducer,
  shuffleBoard,
  boardsAreEqual,
} from './board-state-utils';

const Board = ({ src, imageWidth, imageHeight, xSteps, ySteps }) => {
  const solvedState = getSolvedState(xSteps, ySteps);
  const [state, dispatch] = useReducer(boardReducer, shuffleBoard(solvedState));
  const isSolved = boardsAreEqual(solvedState, state);
  const style = {
    position: 'absolute',
    width: (100 * imageWidth) / imageHeight + 'vh',
    maxWidth: '100vw',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
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
        <Tile {...tile} src={src} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default Board;
