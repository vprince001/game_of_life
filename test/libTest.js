const assert = require("assert");

const { createArray, createGrid } = require("../src/library.js");

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
