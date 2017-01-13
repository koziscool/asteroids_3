
var view  = {
  drawShip: function( ship ){

    var canvas = document.getElementById("canvas");
    if(canvas.getContext) {

      var ctx = canvas.getContext("2d");

      // Draw triangle
      ctx.fillStyle="#A2322E";
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