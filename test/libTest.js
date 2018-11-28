const assert = require("assert");

const { createArray, 
  createGrid,
  initializeGrid,
  getCoordinates,
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
