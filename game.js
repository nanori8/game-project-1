class Game {
    constructor ($canvas){
        this.$canvas = $canvas;
        this.context = this.$canvas.getContext('2d');
        
        this.basePixel = $canvas.width/25;

        this.pillsTimer = 0
        this.pillsRate = 1500 //one new obstacle every 1.5 seconds

        this.doctorsTimer  = 0
        this.doctorsRate = 2000 //one new obstacle every 1.5 seconds


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

    
    loop (timestamp) {       
        this.arrayObstacles(timestamp)
        this.runLogic();
        this.drawGame();
        //console.log('loop is running')

        if (this.running) {
           window.requestAnimationFrame(timestamp => this.loop(timestamp))
        }
      }
      
    clearCanvas () {
        this.context.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
    }
    
    
    runLogic () {
        for(let obstacle of this.obstacles){
            obstacle.runLogic();
        }
        this.character.detectCollision();
    }
    
    arrayObstacles (timestamp) {
        //pills will be generating every 1.5 sconds
        if(this.pillsTimer < timestamp - this.pillsRate){
            this.pillsTimer = timestamp
            const obstacle = new Obstacle(this, Math.random()*600, 0, 20, 20, 2, 'images/pill-red.png');
            this.obstacles.push(obstacle);
        }

        //doctors will be generating every 2 seconds
        if(this.doctorsTimer === 0 || !this.doctorsTimer){
            console.log('doctorsTime', this.doctorsTimer)
            this.doctorsTimer = timestamp
            console.log('doctorsTime', this.doctorsTimer)
        }else if(this.doctorsTimer < timestamp - this.doctorsRate){
            this.doctorsTimer = timestamp
            const obstacle = new Obstacle(this, Math.random()*600, 0, 20, 20, 4, 'images/doctor.png');
            this.obstacles.push(obstacle);
        }
        //console.log(this.obstacles)
    }   


    obstacleDraw () {
       for(let obstacle of this.obstacles){
           obstacle.draw()
       }
      }

    
    drawGame () {
        this.clearCanvas();
        this.background.draw();
        this.character.draw();
        this.obstacleDraw()
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
        this.character = new Character (this, 300, 350, 200, 100);
            
        this.background = new Background(this);
      
        //this.obstacle = new Obstacle(this, 10, 10, 20, 20, 10);
        this.obstacles=[]
                
        this.scoreboard = new Scoreboard(this);
        
        this.score = 0; 
        this.speed = 1;

        this.drawGame();
    }
}