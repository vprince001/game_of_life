const assert = require("assert");

const { createArray, 
  createGrid,
  initializeGrid,
  getCoordinates,
  zipArray,
  getValidNeighbours,
  getNeighbours,
  remove,
  validateNeighbours,
  displayGrid } = require("../src/library.js");

describe("createArray ",function() {

  it("Should return empty array for 0",function() {
    assert.deepEqual(createArray(0), []);
  });

  it("Should return one element Array for 1",function() { 
    assert.deepEqual(createArray(1), [0]);
  });

  it("Should return array of given size",function() { 
    assert.deepEqual(createArray(5), [0,0,0,0,0]);
  });

});

describe("createGrid ",function() {

  it("Should return empty array for 0",function() {
    assert.deepEqual(createGrid(0),[]);
  });

  it("Should return one element Array for 1",function() {
      assert.deepEqual(createGrid(1),[[0]]);
  });

  it("Should return array of given size",function() {
      assert.deepEqual(createGrid(3),[[0,0,0],[0,0,0],[0,0,0]]);
  });

});

describe("insertElement", function() {

  it("Should insert 1 at position 1 in given grid", function() {
    let inputGrid = [ [0,0,0] , [0,0,0] , [0,0,0] ];
    let expectedGrid = [[1,0,0],[0,0,0],[0,0,0]];

    assert.deepEqual(initializeGrid(inputGrid, [1]), expectedGrid);
  });

  it("Should insert 1 at positions 1,5,7 in given grid", function() {
    let inputGrid = [ [0,0,0] , [0,0,0] , [0,0,0] ];
    let expectedGrid = [[1,0,0],[0,1,0],[1,0,0]];

    assert.deepEqual(initializeGrid(inputGrid, [1,5,7]), expectedGrid);
  });

  it("Should insert 1 at positions 1,3,4,7 in given grid", function() {
    let inputGrid = [ [0,0,0] , [0,0,0] , [0,0,0] ];
    let expectedGrid = [[1,0,1],[1,0,0],[1,0,0]];
    assert.deepEqual(initializeGrid(inputGrid, [1,3,4,7]), expectedGrid);
  });

});

describe("displayGrid", function() {

  it("Should return formatted string of given grid of size 2", function() {
    let inputGrid = [[1,0],[0,0]];
    let expectedGrid = "1 0\n0 0"

    assert.deepEqual(displayGrid(inputGrid), expectedGrid);
  });

  it("Should return formatted string of given grid of size 3", function() {
    let inputGrid = [[1,0,1],[1,0,0],[1,0,0]];
    let expectedGrid = "1 0 1\n1 0 0\n1 0 0"

    assert.deepEqual(displayGrid(inputGrid), expectedGrid);
  });

});

describe("Get Coordinates",function() {

  it("should return undefined when size is 0",function() {
    assert.deepEqual(getCoordinates(4,0),[]);
  });

  it("should return array of length 2 when position is provided",function() {
    assert.deepEqual(getCoordinates(5,5),[1,0]);
  });

});

describe("zipArray",function() {

  it("should zip array elements with given element",function() {
    zip = zipArray([1,2,3,4]);
    assert.deepEqual(zip([],3),[[3,1],[3,2],[3,3],[3,4]]);
  });

  it("should return empty array for empty array ",function() { 
    zip = zipArray([]);
    assert.deepEqual(zip([],3),[]);
  });

  it("should return zip array of one element",function() { 
    zip = zipArray([3]);
    assert.deepEqual(zip([],3), [ [3,3] ]);
  });

});

describe("validateNeighbours",function() {

  it("should return true for size 0",function() {
    isValidNeighbour = validateNeighbours(5);
    assert.equal(isValidNeighbour([0,0]),true)
  });

  it("should return true for size => 0",function() {
    isValidNeighbour = validateNeighbours(3);
    assert.equal(isValidNeighbour([2,1]),true)
  });

  it("should return false for size > size-1",function() {
    isValidNeighbour = validateNeighbours(3);
    assert.equal(isValidNeighbour([3,2]),false)
  });

  it("should return false for size < 0",function() {
    isValidNeighbour = validateNeighbours(3);
    assert.equal(isValidNeighbour([-1,2]),false)
  });

});

describe("remove",function() {

  it("should return false for same cell and element",function() {
    cellToRemove = remove([0,1]);
    assert.equal(cellToRemove([0,1]),false);
  });

  it("should return true for different cell and element",function() {
    cellToRemove = remove([1,1]);
    assert.equal(cellToRemove([0,1]),true);
  });

});

describe("getValidNeighbours",function() {
  let grid = [["D","D","D"],["D","D","D"],["D","D","D"]]

  it("should return empty array for no neighbours",function() {
    assert.deepEqual(getValidNeighbours([0,1],[],grid),[]);
  });

  it("should return array of non zero array element ",function() {
    assert.deepEqual(getValidNeighbours([0,1],[[1,1],[1,2],[-1,1],[2,2]],grid),[[1,1],[1,2],[2,2]]);
  });

  it("should return array of elements < gridSize ",function() {
    assert.deepEqual(getValidNeighbours([0,1],[[1,1],[1,3],[-1,1],[2,4]],grid),[[1,1]]);
  });

});

describe("getNeighbours",function() {
  let grid = [["D","D","D"],["D","D","D"],["D","D","D"]]

  it("should return array of neighbour of given cell",function() {
    assert.deepEqual(getNeighbours([0,0],grid),[[0,1],[1,0],[1,1]]);
    assert.deepEqual(getNeighbours([0,1],grid),[[0,0],[0,2],[1,0],[1,1],[1,2]]);
  });
});

