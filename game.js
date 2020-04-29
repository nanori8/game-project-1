class Game {
    constructor ($canvas){
        this.$canvas = $canvas;
        this.context = this.$canvas.getContext('2d');
        
        this.basePixel = $canvas.width/25;

        this.medicalKitTimer = 0
        this.medicalKitRate = 10000 //one new obstacle every 4 seconds

        this.glovesTimer  = 0
        this.glovesRate = 1000000 //one new obstacle every 1 seconds

        
        this.inhalerTimer  = 0
        this.inhalerRate = 2000000 //one new inhaler every 2 seconds


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
        //medicalKit will be generating every 1.5 sconds
        if(this.medicalKitTimer < timestamp - this.medicalKitRate){
            this.medicalKitTimer = timestamp
            const obstacle = new Obstacle(this, 110, 70, 20, 20, 1, 'images/kit.png');
            // const obstacle = new Obstacle(this, Math.random()*600, 0, 20, 20, 2, 'images/pill-red.png');
            this.obstacles.push(obstacle);
        }

        // //gloves will be generating every 2 seconds
        // if(this.glovesTimer === 0 || !this.glovesTimer){
        //     // console.log('glovesTime', this.glovesTimer)
        //     this.glovesTimer = timestamp
        //     // console.log('glovesTime', this.glovesTimer)
        // }else if(this.glovesTimer < timestamp - this.glovesRate){
        //     this.glovesTimer = timestamp
        //     const obstacle = new Obstacle(this, 110, 70, 20, 20, 3, 'images/gloves.png');
        //     // const obstacle = new Obstacle(this, Math.random()*600, 0, 20, 20, 4, 'images/doctor.png');
        //     this.obstacles.push(obstacle);
        // }

        // if(this.inhalerTimer < timestamp - this.inhalerRate){
        //     this.inhalerTimer = timestamp
        //     const obstacle = new Obstacle(this, 110, 70, 20, 20, 2, 'images/inhaler.png');
        //     // const obstacle = new Obstacle(this, Math.random()*600, 0, 20, 20, 2, 'images/pill-red.png');
        //     this.obstacles.push(obstacle);
        // }
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
        this.character = new Character (this, 300, 360, 100, 50);
            
        this.background = new Background(this);
      
        this.obstacles=[]
                
        this.scoreboard = new Scoreboard(this);
        
        this.score = 0; 
        this.speed = 1;

        this.drawGame();
    }
}