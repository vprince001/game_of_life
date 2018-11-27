const assert = require("assert");

const { createArray, 
  createGrid,
  initializeGrid } = require("../src/library.js");

describe("Create Array ",function() {

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

describe("Create Grid ",function() {

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

describe("InsertElement", function() {

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

});
