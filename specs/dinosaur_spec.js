var assert = require("assert");
var Dinosaur = require("../dinosaur.js");

describe ("Dinosaur Tests", function() {
  beforeEach(function() {
    triceratops = new Dinosaur("Belle", "Triceratops", 2);
  });
  it("should have a type", function() {
    var result = triceratops.hasType();
    assert.strictEqual(result, true);
  })
  it("should have offspring", function() {
    var result = triceratops.hasOffspring();
    assert.strictEqual(result, true);
  })
});
