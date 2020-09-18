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
  };

  const imgStyle = {
    width: 100 * xSteps + '%',
    height: 100 * ySteps + '%',
    marginLeft: -100 * imgX + '%',
    marginTop: -100 * imgY + '%',
  };

  return (
    <div style={divStyle}>
      <img src={src} alt="Tile" style={imgStyle} />
    </div>
  );
};

export default Tile;
