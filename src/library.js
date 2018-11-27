const createArray = function(size) {
  return new Array(size).fill("D");
};

const createGrid = function(size) {
  let grid = [];
  for(let currentSize = 0; currentSize < size; currentSize++) {
    grid.push(createArray(size));
  }
  return grid;
}

module.exports = { createArray, createGrid };
