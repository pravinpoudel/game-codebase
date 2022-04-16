"use strict";

// ------------------------------------------------------------------
//
// This is a random number generation object.  It provides a handful
// of different ways to generate random numbers.  It is written as a
// Singleton so that there is only one of these throughout the program.
//
// ------------------------------------------------------------------
var Random = function () {
  "use strict";

  function nextDouble() {
    return Math.random();
  }

  function nextRange(min, max) {
    var range = max - min;
    return Math.floor(Math.random() * range + min);
  }

  function nextCircleVector() {
    var angle = Math.random() * 2 * Math.PI;
    return {
      x: Math.cos(angle),
      y: Math.sin(angle)
    };
  } //
  // This is used to give a small performance optimization in generating gaussian random numbers.


  var usePrevious = false;
  var y2; //
  // Generate a normally distributed random number.
  //
  // NOTE: This code is adapted from a wiki reference I found a long time ago.  I originally
  // wrote the code in C# and am now converting it over to JavaScript.
  //

  function nextGaussian(mean, stdDev) {
    var x1 = 0;
    var x2 = 0;
    var y1 = 0;
    var z = 0;

    if (usePrevious) {
      usePrevious = false;
      return mean + y2 * stdDev;
    }

    usePrevious = true;

    do {
      x1 = 2 * Math.random() - 1;
      x2 = 2 * Math.random() - 1;
      z = x1 * x1 + x2 * x2;
    } while (z >= 1);

    z = Math.sqrt(-2 * Math.log(z) / z);
    y1 = x1 * z;
    y2 = x2 * z;
    return mean + y1 * stdDev;
  }

  return {
    nextDouble: nextDouble,
    nextRange: nextRange,
    nextCircleVector: nextCircleVector,
    nextGaussian: nextGaussian
  };
}();
//# sourceMappingURL=random.dev.js.map
