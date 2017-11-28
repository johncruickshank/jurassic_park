var JurassicPark = function() {
  this.paddock = [];
};

JurassicPark.prototype = {
  countDinos: function() {
    return this.paddock.length;
  },
  addDino: function(dino) {
    this.paddock.push(dino);
  },
  countType: function(type) {
    var totalDinos = 0;
    for (var dino of this.paddock) {
      if (type === dino.type) {
      totalDinos++;
      }
    }
    return totalDinos;
  },
    countBabyMakers: function() {
    var totalDinos = 0;
    for (var dino of this.paddock) {
      if (dino.annualOffspring > 2) {
      totalDinos++;
      }
    }
    return totalDinos;
  }
};


module.exports = JurassicPark;
