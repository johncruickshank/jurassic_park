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
  },
  countDinosInFuture: function(years) {
    for (var i = 0; i < years; i++) {
      for (var dino in this.paddock) {
        for (var j = 0; j < dino.annualOffspring; j++) {
          this.paddock.push(new Dinosaur(dino.type, (Math.floor((Math.random() * 5) + 1))))
        }
      }
    }
    return this.countDinos();
  }
};


module.exports = JurassicPark;
