class Game {
    constructor ($canvas){
        this.$canvas = $canvas;
        this.context = this.$canvas.getContext('2d');

        const basePixel = $canvas.width/10;

        this.setKeyBindings();
        
        this.reset();
    }
    
    reset () {
        this.character = new Character (this);
        this.character.x = 300;
        this.character.y = 450;
        // this.obstacle = new Obstacle (this);
        this.background = new Background(this);

        this.obstacle = new Obstacle(this);

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
               console.log('left button pressed ' + this.character.x)
               break;
             case 39:
               event.preventDefault();
               this.character.moveRight('right');
               this.drawGame();
               console.log('right button pressed ' + this.character.x)
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
        console.log('I ran')
        this.context.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
      }

       
    runLogic () {
        // this.character.runLogic();
        // this.obstacle.runLogic;
    }


    drawGame () {
        // console.log('draw game is running')
        this.clearCanvas();
        console.log('canvas was clearded')
        // this.obstacle.draw;
        this.background.draw();
        console.log('background was draw')
        this.character.draw();
        console.log('character was draw')

    }

    // pause() {

    // }

}