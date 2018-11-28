const createArray = function(size) {
  return new Array(size).fill(0);
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
    grid[row][column] = 1;
  }
  return grid;
};

const displayGrid = function(grid) {
  let result = grid.map(function(x) { return x.join(" ") } );
  return result.join("\n");
};

const getCoordinates = function (position,size) {
  let coordinates = [];
  if(size < 3) {
    return coordinates;
  }
  coordinates.push( Math.floor(position / size) );
  coordinates.push( (position % size) );
  return coordinates;
};

const zipArray = function(columnCoordinates) {
  return function(zippedArray, element) {
    for(let index = 0; index < columnCoordinates.length; index++) {
      zippedArray.push([element, columnCoordinates[index]]);
    }
    return zippedArray; 
  }
};

const getValidNeighbours = function(cell, neighbourCandidates, grid) { 
  let removeGivenCell = remove(cell);
  let allNeighbours = neighbourCandidates.filter(removeGivenCell);
  let isValidNeighbour = validateNeighbours(grid.length);
  return allNeighbours.filter(isValidNeighbour);
};

const remove = function(cell) { 
 return function (element) { 
   return !( element[0] == cell[0] && element[1] == cell[1] )
 };
};

const validateNeighbours = function(size) { 
 return function (element) { 
   return ! ( element.some( (element => element<0 || element > size-1) ) )
 };
};

const getNeighbours = function(cellCoordinates, grid) {
  let rowCoordinates = [ cellCoordinates[0]-1, cellCoordinates[0], cellCoordinates[0]+1 ];
  let columnCoordinates = [ cellCoordinates[1]-1, cellCoordinates[1], cellCoordinates[1]+1 ];
  let zip = zipArray(columnCoordinates);
  let neighbourCandidates = rowCoordinates.reduce(zip,[]);
  let neighbours = getValidNeighbours(cellCoordinates, neighbourCandidates, grid);
  return neighbours;
}

module.exports = { 
  createArray, createGrid,
  initializeGrid, displayGrid,
  getCoordinates,zipArray,
  remove,validateNeighbours,
  getValidNeighbours,getNeighbours
};
