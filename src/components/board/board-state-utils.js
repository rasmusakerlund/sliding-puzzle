export function getSolvedState(xSteps, ySteps) {
  const state = [];

  for (let i = 0; i < xSteps * ySteps - 1; i++) {
    state.push({
      key: i,
      boardX: i % xSteps,
      boardY: Math.floor(i / xSteps),
      imgX: i % xSteps,
      imgY: Math.floor(i / xSteps),
      xSteps,
      ySteps,
    });
  }

  return state;
}

export function boardReducer(state, action) {
  switch (action.type) {
    case 'ARROW_LEFT':
      return moveLeft(state);
    case 'ARROW_RIGHT':
      return moveRight(state);
    case 'ARROW_UP':
      return moveUp(state);
    case 'ARROW_DOWN':
      return moveDown(state);
    default:
      throw new Error();
  }
}

function moveLeft(state) {
  const [x, y] = getEmptyLocation(state);
  if (x < state[0].xSteps - 1) {
    return moveTile(state, x + 1, y, x, y);
  } else {
    return state;
  }
}

function moveRight(state) {
  const [x, y] = getEmptyLocation(state);
  if (x > 0) {
    return moveTile(state, x - 1, y, x, y);
  } else {
    return state;
  }
}

function moveUp(state) {
  const [x, y] = getEmptyLocation(state);
  if (y < state[0].ySteps - 1) {
    return moveTile(state, x, y + 1, x, y);
  } else {
    return state;
  }
}

function moveDown(state) {
  const [x, y] = getEmptyLocation(state);
  if (y > 0) {
    return moveTile(state, x, y - 1, x, y);
  } else {
    return state;
  }
}

function moveTile(state, oldX, oldY, newX, newY) {
  return state.map((tile) => {
    if (tile.boardX === oldX && tile.boardY === oldY) {
      return { ...tile, boardX: newX, boardY: newY };
    } else {
      return tile;
    }
  });
}

function getEmptyLocation(state) {
  const { xSteps, ySteps } = state[0];
  for (let x = 0; x < xSteps; x++) {
    for (let y = 0; y < ySteps; y++) {
      if (
        state.filter((tile) => tile.boardX === x && tile.boardY === y)
          .length === 0
      )
        return [x, y];
    }
  }
}
