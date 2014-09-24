/*LOADING SCRIPT - UNIVERSAL*/

Crafty.scene("Loading", function() {
	
	Crafty.e('2D, DOM, Text')
		.text("Loading.....")
		.attr({ x: 200, y: 200, w: 50, h: 50 });

	Crafty.load(['res/spritesheet.png'], function(){
        
        Crafty.sprite(32, 'res/spritesheet.png', {
            playerUp:   [0,  0],
            playerDown: [0, 32],
            playerLeft: [0, 64],
            playerRight:[0, 96]
        });
 
        Crafty.scene("map1");
	})

});