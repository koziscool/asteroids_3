
var ship = {
  // uses locationX, locationY, direction
  width: 30,
  height: 50,
  // acceleration: 12,
  locationX: 300,
  locationY: 300,
  direction: 0.0 * Math.PI,
  velX: 0,
  velY: 0,

  headPoint: function() {
    var r = 30;
    var theta = ship.direction;
    point = {
      x: ship.locationX + (r * Math.cos( theta )),
      y: ship.locationY + r * Math.sin( theta ),
    };
    return point;
  },

  rearPoint1: function() {
    var r = 25;
    var theta = 3/4 * Math.PI + ship.direction;
    point = {
      x: ship.locationX + r * Math.cos( theta ),
      y: ship.locationY + r * Math.sin( theta ),
    };
    return point;
  },

  rearPoint2: function() {
    var r = 25;
    var theta = 5/4 * Math.PI + ship.direction;
    point = {
      x: ship.locationX + r * Math.cos( theta ),
      y: ship.locationY + r * Math.sin( theta ),
    };
    return point;
  },
  
};