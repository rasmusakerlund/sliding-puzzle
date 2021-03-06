import React from 'react';

const Tile = ({
  src,
  boardX,
  boardY,
  imgX,
  imgY,
  xSteps,
  ySteps,
  dispatch,
}) => {
  const divStyle = {
    position: 'absolute',
    width: 100 / xSteps + '%',
    height: 100 / ySteps + '%',
    transform: 'translate(' + 100 * boardX + '%,' + 100 * boardY + '%)',
    overflow: 'hidden',
    top: '0',
    left: '0',
    transition: 'all .2s',
    clipPath: 'polygon(2% 2%, 98% 2%, 98% 98%, 2% 98%)',
  };

  const imgStyle = {
    position: 'absolute',
    width: 100 * xSteps + '%',
    left: -100 * imgX + '%',
    top: -100 * imgY + '%',
  };

  return (
    <div
      style={divStyle}
      onMouseDown={() => {
        dispatch({
          type: 'CLICK',
          boardX,
          boardY,
        });
      }}
      onTouchStart={() => {
        dispatch({
          type: 'CLICK',
          boardX,
          boardY,
        });
      }}
      onTouchEnd={(e) => {
        // prevents onMouseDown from being triggered.
        e.preventDefault();
      }}
    >
      <img src={src} alt="Tile" style={imgStyle} />
    </div>
  );
};

export default Tile;
