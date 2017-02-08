
var view  = {

  init: function(){
    view.listeners.keypressListener();
    // view.listeners.keyupListener();
  },

  listeners: {
    keypressListener: function() {
      $(document).keydown( function(e){
        switch(e.which) {
          case 37:
            controller.direction = "left";
            break;

          case 32:
            controller.fire = true;
            break;

          case 39:
            controller.direction = "right";
            break;

          case 38:
            controller.direction = "up";
            break;
        }
      });
    },

    keyupListener: function() {
      $(document).keydown( function(e){
        switch(e.which) {
          case 37:
            controller.direction = "";
            break;

          case 38:
            controller.direction = "";
            break;

          case 39:
            controller.direction = "";
            break;

          case 40:
            controller.direction = "";
            break;

        }
      });
    }
  },

  drawAsteroid: function(asteroid){
    // console.log('asteroid');
    var c=document.getElementById("canvas");
    var ctx=c.getContext("2d");
    ctx.fillStyle="#FFFFFF";
    ctx.strokeStyle="#FFFFFF";
    ctx.rect(asteroid.locationX, asteroid.locationY, asteroid.width, asteroid.height);
    ctx.stroke();
  },

  drawShip: function( ship ){

    var canvas = document.getElementById("canvas");
    if(canvas.getContext) {

      var ctx = canvas.getContext("2d");

      // Draw triangle
      ctx.fillStyle="#A2322E";
      ctx.strokeStyle="#FFFFFF";
      // ctx.strokeStyle="#000000";

      ctx.beginPath();
      // Draw a triangle location for each corner from x:y 100,110 -> 200,10 -> 300,110 (it will return to first point)
      ctx.moveTo( ship.rearPoint1().x, ship.rearPoint1().y );
      ctx.lineTo( ship.headPoint().x, ship.headPoint().y );
      ctx.lineTo( ship.rearPoint2().x, ship.rearPoint2().y );
      ctx.closePath();

      ctx.fill();
    }
  },


  clearCanvas: function() {
    var canvas = document.getElementById("canvas");
    if(canvas.getContext) {
      var ctx = canvas.getContext("2d");
      canvas.width = canvas.width;
    }
  }
};