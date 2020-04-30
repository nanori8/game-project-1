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
        
        this.inicialX = this.inicialX;
        this.inicialY =  this.inicialY;
        
        this.speed = 1
        this.time = 0
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
            console.log('time is increasing')    

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
                obstacle.speed = obstacle.speed + 1;
                ;
            } else {obstacle.runLogic()};
            
            //run the collision detection
            if(obstacle.detectCollision()){
                //collision detected!
                //remove the obstacle from the array

                if(obstacle.imageName === 'virus'){
                    this.obstacles.splice(i, 1) // Delete object
                    i++
                }else{
                    const hospitalX = 600
                    const hospitalY = 190
                    obstacle.toHospital = true
                    const a  = (-hospitalY + obstacle.y) / (-hospitalX + obstacle.x)
                    obstacle.toHospitalEquationA = a
                    obstacle.toHospitalEquationB = obstacle.y - a * obstacle.x
                    console.log("A",a)
                    console.log("B",obstacle.y - a * obstacle.x)
                }
                //update the score
                this.scoreboard.updateScore(obstacleType)
            }
        }
        this.time += 0.02;
    }
    
    arrayObstacles (timestamp) {
        
        if(this.virusTimer < timestamp - this.virusRate){
            this.virusTimer = timestamp
            const obstacle = new Obstacle(this, Math.random()*600, 10, 20, 20, this.speed*1/2,'images/virus.png', 'virus');
            this.obstacles.push(obstacle);
        }

        //medicalKit will be generating every 1.5 sconds
        if(this.medicalKitTimer < timestamp - this.medicalKitRate){
            this.medicalKitTimer = timestamp
            const obstacle = new Obstacle(this, this.inicialX + 10, this.inicialY, 20, 20, this.speed, 'images/kit.png', 'kit');
            this.obstacles.push(obstacle);
        }

        //gloves will be generating every 2 seconds
        if(this.glovesTimer === 0 || !this.glovesTimer){
            // console.log('glovesTime', this.glovesTimer)
            this.glovesTimer = timestamp
            // console.log('glovesTime', this.glovesTimer)
        }else if(this.glovesTimer < timestamp - this.glovesRate){
            this.glovesTimer = timestamp
            const obstacle = new Obstacle(this, this.inicialX, this.inicialY, 20, 20, this.speed, 'images/gloves.png', 'gloves');
            this.obstacles.push(obstacle);
        }

        if(this.inhalerTimer < timestamp - this.inhalerRate){
            this.inhalerTimer = timestamp
            const obstacle = new Obstacle(this, this.inicialX, this.inicialY, 20, 20, this.speed, 'images/inhaler.png', 'inhaler');
            //const obstacle = new Obstacle(this, Math.random()*600, 0, 20, 20, 2, 'images/pill-red.png');
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
        this.drawInstructions
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
        const gameoverimage = new Image();

        gameoverimage.src = 'images/gameover.png';
        gameoverimage.addEventListener('load', () =>{
            context.drawImage(gameoverimage, 0, 0)
        })

        context.drawImage(gameoverimage, 0, 0)

        // alert("GAME OVER");
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