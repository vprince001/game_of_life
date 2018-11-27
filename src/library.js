const createArray = function(size) {
  return new Array(size).fill("D");
};

const createGrid = function(size) {
  let grid = [];
  for(let currentSize = 0; currentSize < size; currentSize++) {
    grid.push(createArray(size));
  }
  return grid;
};

const initializeGrid = function(grid, positions) {
  let length = grid.length;
  let row,column;

  for(position of positions) {
    position--;
    row = Math.floor(position / length);
    column = position % length;
    grid[row][column] = "A";
  }
  return grid;
};

const displayGrid = function(grid) {
  let result = grid.map(function(x) { return x.join(" ") } );
  return result.join("\n");
}

module.exports = { 
  createArray, createGrid,
  initializeGrid, displayGrid
};
