
var controller = {

  direction: "",
  fire: false,

  init: function(){
    // set initial values for ship
    view.clearCanvas();
    view.drawShip( ship );
    controller.generateAsteroids(5);
  },

  generateAsteroids: function(num){
    for(var i=0; i < num; i++){
      space.asteroids.push(asteroid.randAsteroid());
    }
  },

  updateAsteroidPos: function(){
    space.asteroids.forEach(function(ast, index, array){
      // if (ast.collision === true && ast.width > space.minAsteroidSize){
      //   controller.splitAsteroid(ast, index);
      // }
      // ast.updatePosition();
      view.drawAsteroid(ast);
    });
  },

  setDirection: function(  ) {
    if(controller.direction === "right"){
      console.log( "right");
      ship.direction += 1/20 * Math.PI;
    }else if (controller.direction === "left"){
      ship.direction -= 1/20 * Math.PI;
    }
  },
  
  gameLoop: function(){
    // controller.generateAsteroids(1);
    view.clearCanvas();
    view.drawShip( ship );
    controller.setDirection();
    // controller.setThrust();
    // controller.controlShipFire();
    controller.updateAsteroidPos();
    ship.updatePosition();
    // asteroid.collision();
  },

  game: function(){
    setInterval(controller.gameLoop, 20);
    // setTimeout(controller.gameLoop);
  }

};