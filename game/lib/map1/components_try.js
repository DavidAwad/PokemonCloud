Crafty.c('Actor', {
  init: function() {
    this.requires('2D, DOM, Grid'); 
  }
});

/*

Crafty.c('Grass', {
  init: function() {
//    this.requires('Actor, Solid, spr_bush')
  this.requires('Actor, Color, Collision')
     .color('rgb(0,250,0)')
     .onHit('Player', this.ongrass)
     .attr({z: -1});
  },
     
  ongrass: function() {
    putMessage("You are walking on a grass!!!");
  }
});
*/

Crafty.c('Player', {
  init: function() {
	  this.requires("Actor, Keyboard, Collision, playerUp, SpriteAnimation")
	    .attr({x: 15*32, y: 15*32, w: 32, h: 32})
		//.image("http://www.lorestrome.com/trash/oldgamefiles/steamy.gif", "no-repeat")
        .stopOnSolids()
		//.onHit('Grass', this.showTheGrassMessage);
		.animate('PlayerMovingUp',    0, 0, 2)
		.animate('PlayerMovingDown',  1, 1, 2)
        .animate('PlayerMovingLeft',  2, 2, 2)
        .animate('PlayerMovingRight', 0, 3, 2);
		
	    var animation_speed = 8;
		var isMoving = false;
  },

  stopOnSolids: function() {
      this.onHit('Solid', this.stopMovement);
      return this;
  },
  
  moveLeft: function() {
      this.x=this.x-32;
      this.borderCheck();
  },
  
  moveRight: function() {
      this.x=this.x+32;  
      this.borderCheck();
  },
  moveUp: function() {
      this.y=this.y-32;  
      this.borderCheck();
  },
  moveDown: function() {
      this.y=this.y+32;  
      this.borderCheck();
  },   
  
  borderCheck: function() {
		if (this.x < 0) {
            this.x = 0
        } else  //west check
        if (this.x > 1248) {
            this.x = 1248
        }  //east check
        if (this.y < 0) {
            this.y = 0
        } else  //north check
        if (this.y > 1248) {
            this.y = 1248
        }  //south check
	},

/*  showTheGrassMessage: function() {
    if (blablabla) {
      for (var i=0; i < 8; i++) {
      document.getElementById('DivWithScroll').innerHTML += "Hi, did you notice? You just went into grass!!!";
      blablabla = false;
      setScrollBarToBottom();
      };
    } 
  },*/

    stopMovement: function() {
        this._speed = 0;
        if (this._movement) {
            this.x -= this._movement.x;
            this.y -= this._movement.y;
        }
    }
});

Crafty.c('block', {
    init: function() {
//      this.requires('Actor, Solid, spr_tree')
        this.requires('Actor, Solid, Color')
        .color('rgb(0, 0, 0)');
    },
});

$(document).ready(function(){
    $(document).bind('keypress', function(e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) { //Enter keycode
            //Do something
            loadEnter();
        }
    });  
});