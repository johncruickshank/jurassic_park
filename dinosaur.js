var Dinosaur = function(name, type, annualOffspring) {
  this.name = name;
  this.type = type;
  this.annualOffspring = annualOffspring;
};

Dinosaur.prototype = {
  hasType: function() {
    if (this.type === undefined) {
      return false;
    } else {
      return true;
    }
  },
  hasOffspring: function() {
    if (this.annualOffspring === undefined) {
      return false;
    } else {
      return true;
    }
  }
};

module.exports = Dinosaur;
