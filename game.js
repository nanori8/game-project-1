class Game {
    constructor ($canvas){
        this.$canvas = $canvas;
        this.context = this.$canvas.getContext('2d');
        
        this.basePixel = $canvas.width/25;

        this.scoreBoard = new Scoreboard(this);

        this.setKeyBindings();
        
        this.reset();
    }
    
    
    setKeyBindings () {
        document.addEventListener('keydown', (event) => {
           const keyCode = event.keyCode;
           switch (keyCode) {
               case 37:
               event.preventDefault();
               this.character.moveLeft('left');
               this.drawGame();
               break;
             case 39:
                 event.preventDefault();
               this.character.moveRight('right');
               this.drawGame();
            break;
           }
        });
    }

    
    loop () {
        this.runLogic();
        this.drawGame();
        console.log('loop is running')
        
        if (this.running) {
            setTimeout(() => {
              this.loop();
            }, 1000 / 30);
        }
      }
      
    clearCanvas () {
        this.context.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
    }
    
    
    runLogic () {
        this.obstacle.runLogic();
        this.character.detectCollision();
    }
    
    
    drawGame () {
        this.clearCanvas();
        this.background.draw();
        this.character.draw();
        this.obstacle.draw();
        this.scoreboard.draw();
    }
    
    start () {
        this.running = true;
        this.loop();
    }

    pause () {
        this.running = false;
    }
    
    reset () {
        this.character = new Character (this, 300, 450, 70, 50);
            
        this.background = new Background(this);
      
        this.obstacle = new Obstacle(this, 10, 10, 20, 20, 10);
                
        this.scoreboard = new Scoreboard(this);
        
        this.score = 0; 
        this.speed = 1;

        this.drawGame();
    }
}