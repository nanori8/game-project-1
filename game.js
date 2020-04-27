class Game {
    constructor ($canvas){
        this.$canvas = $canvas;
        this.context = this.$canvas.getContext('2d');
        
        this.basePixel = $canvas.width/25

        this.setKeyBindings();
        
        this.reset();
    }
    
    reset () {
        this.character = new Character (this, 0, 0, 70, 50);
        this.character.x = 300;
        this.character.y = 450;

        this.background = new Background(this);

        this.obstacle = new Obstacle(this, 10, 10, 50, 50);


        this.score = 0; 
        this.speed = 1;

        this.drawGame();
    }
    
    setKeyBindings () {
       document.addEventListener('keydown', (event) => {
           const keyCode = event.keyCode;
           switch (keyCode) {
             case 37:
               event.preventDefault();
               this.character.moveLeft('left');
               this.drawGame();
            //    console.log('left button pressed ' + this.character.x)
               break;
             case 39:
               event.preventDefault();
               this.character.moveRight('right');
               this.drawGame();
            //    console.log('right button pressed ' + this.character.x)
               break;
           }
        });
      }

    start () {
        this.running = true;
        console.log('game has started')
        this.runLogic();
        console.log('logic run')
        this.drawGame();
        console.log('game was draw')
    }

    // loop () {
    //     this.drawGame();
    //     this.runLogic();
    //     // console.log('loop is running')
    
    //     if (this.running) {
    //       setTimeout(() => {
    //         this.loop();
    //       }, 500 / (this.speed * 1));
    //     }
    //   }

    clearCanvas () {
        console.log('clearCanvas was called')
        this.context.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
    }
    
    
    runLogic () {
        console.log('run logic was called')
        this.obstacle.runLogic;
    }


    drawGame () {
        // console.log('draw game is running')
        this.clearCanvas();
        console.log('canvas was run')
        this.background.draw();
        console.log('background was draw')
        this.character.draw();
        console.log('character was draw')
        this.obstacle.draw();
        console.log('obstacle was draw')

    }

    // pause() {

    // }

}