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
    assert.deepEqual(createArray(1), ["D"]);
  });

  it("Should return array of given size",function() { 
    assert.deepEqual(createArray(5), ["D","D","D","D","D"]);
  });

});

describe("createGrid ",function() {

  it("Should return empty array for 0",function() {
    assert.deepEqual(createGrid(0),[]);
  });

  it("Should return one element Array for 1",function() {
      assert.deepEqual(createGrid(1),[["D"]]);
  });

  it("Should return array of given size",function() {
      assert.deepEqual(createGrid(3),[["D","D","D"],["D","D","D"],["D","D","D"]]);
  });

});

describe("insertElement", function() {

  it("Should insert 'A' at position 1 in given grid", function() {
    let inputGrid = [ ["D","D","D"] , ["D","D","D"] , ["D","D","D"] ];
    let expectedGrid = [["A","D","D"],["D","D","D"],["D","D","D"]];

    assert.deepEqual(initializeGrid(inputGrid, [1]), expectedGrid);
  });

  it("Should insert 'A' at position 1,5,7 in given grid", function() {
    let inputGrid = [ ["D","D","D"] , ["D","D","D"] , ["D","D","D"] ];
    let expectedGrid = [["A","D","D"],["D","A","D"],["A","D","D"]];

    assert.deepEqual(initializeGrid(inputGrid, [1,5,7]), expectedGrid);
  });

  it("Should insert 'A' at position 1,3,4,7 in given grid", function() {
    let inputGrid = [ ["D","D","D"] , ["D","D","D"] , ["D","D","D"] ];
    let expectedGrid = [["A","D","A"],["A","D","D"],["A","D","D"]];
    assert.deepEqual(initializeGrid(inputGrid, [1,3,4,7]), expectedGrid);
  });

});

describe("displayGrid", function() {

  it("Should return formatted string of given grid of size 2", function() {
    let inputGrid = [["A","D"],["D","D"]];
    let expectedGrid = "A D\nD D"

    assert.deepEqual(displayGrid(inputGrid), expectedGrid);
  });

  it("Should return formatted string of given grid of size 3", function() {
    let inputGrid = [["A","D","A"],["A","D","D"],["A","D","D"]];
    let expectedGrid = "A D A\nA D D\nA D D"

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
