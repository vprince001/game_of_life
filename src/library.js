const createArray = function(size) {
  return new Array(size).fill("D");
};

const createGrid = function(size) {
  let grid = [];
  for(let i = 0; i < size; i++) {
    grid.push(createArray(size));
  }
  return grid;
}

module.exports = { createArray, createGrid };
