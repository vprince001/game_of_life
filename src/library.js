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
  let size = grid.length;
  let row,column;

  for(position of positions) {
    position--;
    coordinates = getCoordinates(position, size);
    row = coordinates[0];
    column = coordinates[1];
    grid[row][column] = "A";
  }
  return grid;
};

const displayGrid = function(grid) {
  let result = grid.map(function(x) { return x.join(" ") } );
  return result.join("\n");
}

const getCoordinates = function (position,size) {
  let coordinates = [];
  if(size < 3) {
    return coordinates;
  }
  coordinates.push( Math.floor(position / size) );
  coordinates.push( (position % size) );
  return coordinates;
}


module.exports = { 
  createArray, createGrid,
  initializeGrid, displayGrid,
  getCoordinates
};
