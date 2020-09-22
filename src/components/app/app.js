import React from 'react';
import Board from '../board/board';

const App = () => {
  const IMAGE_WIDTH = 1920;
  const IMAGE_HEIGHT = 1080;
  const X_STEPS = 4;
  const Y_STEPS = 2;
  const src = `https://source.unsplash.com/random/${IMAGE_WIDTH}x${IMAGE_HEIGHT}`;

  return (
    <Board
      src={src}
      imageWidth={IMAGE_WIDTH}
      imageHeight={IMAGE_HEIGHT}
      xSteps={X_STEPS}
      ySteps={Y_STEPS}
    />
  );
};

export default App;
