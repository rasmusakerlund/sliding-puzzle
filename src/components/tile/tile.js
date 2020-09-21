import React from 'react';

const Tile = ({ src, boardX, boardY, imgX, imgY, xSteps, ySteps }) => {
  const divStyle = {
    position: 'absolute',
    width: 100 / xSteps + '%',
    height: 100 / ySteps + '%',
    transform: 'translate(' + 100 * boardX + '%,' + 100 * boardY + '%)',
    overflow: 'hidden',
    top: '0',
    left: '0',
    transition: 'all .2s',
    clipPath: 'polygon(1% 1%, 99% 1%, 99% 99%, 1% 99%)',
  };

  const imgStyle = {
    position: 'absolute',
    width: 100 * xSteps + '%',
    left: -100 * imgX + '%',
    top: -100 * imgY + '%',
  };

  return (
    <div style={divStyle}>
      <img src={src} alt="Tile" style={imgStyle} />
    </div>
  );
};

export default Tile;
