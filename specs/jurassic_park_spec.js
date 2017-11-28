var assert = require("assert");
var JurassicPark = require("../jurassic_park.js");
var Dinosaur = require("../dinosaur.js");

describe ("Jurassic Park Tests", function() {
  beforeEach(function() {
    islaNublar = new JurassicPark();
    triceratops = new Dinosaur("Triceratops", 2);
    diplodocus = new Dinosaur("Diplodocus", 4);
    velociraptor = new Dinosaur("Velociraptor", 1);
    triceratops2 = new Dinosaur("Triceratops", 1);
  });
  it("should start empty", function() {
    var dinoCount = islaNublar.countDinos();
    assert.strictEqual(dinoCount, 0);
  });
  it("should be able to add dinosaur", function() {
    islaNublar.addDino(triceratops);
    var dinoCount = islaNublar.countDinos();
    assert.strictEqual(dinoCount, 1);
  });
  it("should be able to remove all dinosaurs of a particular type", function() {
    islaNublar.addDino(triceratops);
    islaNublar.addDino(diplodocus);
    islaNublar.addDino(triceratops2);
    var dinoCount = islaNublar.countType("Triceratops");
    assert.strictEqual(dinoCount, 2);
  });
  it("should be able to get all the dinosaurs with an offspring count of more than 2", function() {
    islaNublar.addDino(triceratops);
    islaNublar.addDino(diplodocus);
    islaNublar.addDino(triceratops2);
    var dinoCount = islaNublar.countBabyMakers();
    assert.strictEqual(dinoCount, 1);
  });
  it("should be able to calculate number of dinosaurs after year one, starting with 1 dinosaur", function() {
    islaNublar.addDino(triceratops);
    var dinoCount = islaNublar.countDinosInFuture(1);
    assert.strictEqual(dinoCount, 3);
  });
});
