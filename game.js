class Game {
    constructor ($canvas){
        this.$canvas = $canvas;
        this.context = this.$canvas.getContext('2d');
    }
    
    createInstances () {
        console.log('instances created')
        this.character = new Character (this);
        // this.obstacle = new Obstacle (this);
        this.background = new Background(this);
    }
    
    setKeyBingings () {
        
    }

    start () {
        console.log('game has started')
        this.running = true;
        this.createInstances();
        this.loop();
    }
    
    reset () {
        this.score = 0; 
        this.speed = 1;
    }

    loop () {
        this.runLogic();
        console.log('loop is running')
        this.drawGame();
    
        if (this.running) {
          setTimeout(() => {
            this.loop();
          }, 500 / (this.speed * 1));
        }
      }

    clearCanvas () {
        this.context.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
      }

       
    runLogic () {
        this.character.runLogic();
        // this.obstacle.runLogic;
    }


    drawGame () {
        console.log('draw game is running')
        this.clearCanvas();
        // this.obstacle.draw;
        this.background.draw();
        this.character.draw();

    }

    // pause() {

    // }


    // reset () {

    // }


}