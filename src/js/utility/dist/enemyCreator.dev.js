"use strict";

function makeCreateCreep1(x, y) {
  var spriteSheet = ["assets/creeps1/1.png", "assets/creeps1/2.png", "assets/creeps1/3.png", "assets/creeps1/4.png", "assets/creeps1/5.png", "assets/creeps1/6.png"];
  return this.createEnemy(x, y, spriteSheet);
}

function makeCreateCreep2(x, y) {
  var spriteSheet = ["assets/creeps2/1.png", "assets/creeps2/2.png", "assets/creeps2/3.png", "assets/creeps2/4.png"];
  return this.createEnemy(x, y, spriteSheet);
}

function makeCreateCreep3(x, y) {
  var spriteSheet = ["assets/creeps3/1.png", "assets/creeps3/2.png", "assets/creeps3/3.png", "assets/creeps3/4.png"];
  return this.createEnemy(x, y, spriteSheet);
}

function createEnemy(x, y, spriteSheet) {
  //all the event to handle movement
  var playerEvent = new MovingEvents({
    size: {
      x: 50,
      y: 50
    },
    // Size in pixels
    center: {
      x: x,
      y: y
    },
    rotation: 0,
    moveRate: 125 / 1000,
    // Pixels per second
    rotateRate: Math.PI / 1000,
    // Radians per second
    continousSpeed: 50
  });
  var timeArray = new Array(spriteSheet.length).fill(25);
  var playerSpecs = {
    spriteSheet: spriteSheet,
    spriteCount: spriteSheet.length,
    spriteTime: timeArray
  }; //make a playerModel

  var playerModel = new gameModel(playerSpecs, playerEvent, true);
  return playerModel;
}
//# sourceMappingURL=enemyCreator.dev.js.map