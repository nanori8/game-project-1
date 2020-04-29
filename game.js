class Game {
    constructor ($canvas){
        this.$canvas = $canvas;
        this.context = this.$canvas.getContext('2d');
        
        this.basePixel = 10;

        this.medicalKitTimer = 0
        this.medicalKitRate = 4000 //one new obstacle every 4 seconds

        this.glovesTimer  = 0
        this.glovesRate = 2000 //one new obstacle every 2 seconds

        
        this.inhalerTimer  = 0
        this.inhalerRate = 3000 //one new inhaler every 3 seconds

        this.virusTimer  = 0
        this.virusRate = 4000 //one new inhaler every 5 seconds

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
        for(let i = 0; i< this.obstacles.length;i++){
            const obstacle = this.obstacles[i]
            const obstacleType = obstacle.imageName
            // const obstacleSpeed= obstacle.speed

            //run the logic for the obstacles
            
            // obstacle.runLogic()
            if(obstacle.imageName === 'virus')
            {
                obstacle.runLogicVirus()
                obstacle.speed = obstacle.speed + 5
                ;
            } else {obstacle.runLogic()};
            
            //run the collision detection
            if(obstacle.detectCollision()){
                //collision detected!
                //remove the obstacle from the array
                this.obstacles.splice(i, 1) // Delete object
                i++
                //update the score
                this.scoreboard.updateScore(obstacleType)
            }
        }
        
    }
    
    arrayObstacles (timestamp) {
        
        if(this.virusTimer < timestamp - this.virusRate){
            this.virusTimer = timestamp
            const obstacle = new Obstacle(this, Math.random()*600, 10, 20, 20, 1/2,'images/virus.png', 'virus');
            this.obstacles.push(obstacle);
        }

        //medicalKit will be generating every 1.5 sconds
        if(this.medicalKitTimer < timestamp - this.medicalKitRate){
            this.medicalKitTimer = timestamp
            const obstacle = new Obstacle(this, 80, 190, 20, 20, 1.6, 'images/kit.png', 'kit');
            this.obstacles.push(obstacle);
        }

        //gloves will be generating every 2 seconds
        if(this.glovesTimer === 0 || !this.glovesTimer){
            // console.log('glovesTime', this.glovesTimer)
            this.glovesTimer = timestamp
            // console.log('glovesTime', this.glovesTimer)
        }else if(this.glovesTimer < timestamp - this.glovesRate){
            this.glovesTimer = timestamp
            const obstacle = new Obstacle(this, 60, 190, 20, 20, 1, 'images/gloves.png', 'gloves');
            this.obstacles.push(obstacle);
        }

        if(this.inhalerTimer < timestamp - this.inhalerRate){
            this.inhalerTimer = timestamp
            const obstacle = new Obstacle(this, 80, 190, 20, 20, 1.3, 'images/inhaler.png', 'inhaler');
            // const obstacle = new Obstacle(this, Math.random()*600, 0, 20, 20, 2, 'images/pill-red.png');
            this.obstacles.push(obstacle);
        }


        // console.log(this.obstacles)
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

    gameOver () {
        const context = this.context;
        
        alert("GAME OVER");
        this.running = false;
        this.reset();
        }
        
        

    reset () {
        this.character = new Character (this, 300, 400, 75, 30);
            
        this.background = new Background(this);
      
        this.obstacles=[]
                
        this.scoreboard = new Scoreboard(this);
        
        this.score = 0; 
        this.speed = 1;

        this.drawGame();
    }
}