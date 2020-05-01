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
        this.inhalerRate = 3000 //one new obstacle every 3 seconds
        
        this.virusTimer  = 0
        this.virusRate = 4000 //one new obstacle every 4 seconds
        
        this.setKeyBindings();
        
        this.reset();
        
        this.running = false; 

        this.speed = 1
        this.time = 0

        this.gameMusic = new Audio ("sounds/GameLoop.mp3")
    }
    
    
    setKeyBindings () {
           document.addEventListener('keydown', (event) => {
           const keyCode = event.keyCode;
           switch (keyCode) {
               case 37:
               event.preventDefault();
               this.character.moveLeft('left');
               break;
             case 39:
                 event.preventDefault();
               this.character.moveRight('right');
            break;
           }
        });
    }
    
    loop (timestamp) {       
        this.arrayObstacles(timestamp)
        this.runLogic();
        this.drawGame();
        
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
            
            const hospitalX = 600
            const hospitalY = 190
            
            // Delete items as they hit the ground
            if(obstacle.y - obstacle.height > 390 ) {
                this.obstacles.splice(i, 1)
                i++
            } 

            //run the logic for the obstacles
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
                    // Update score for the Virus
                    this.scoreboard.updateScore(obstacleType)
                    this.obstacles.splice(i, 1) // Delete object
                    i++
                    const hitVirus = new Audio ("sounds/virus_sound.mp3")
                    hitVirus.play()
                    // Move the item to the hospital
                }else{
                    obstacle.toHospital = true
                    const a  = (-hospitalY + obstacle.y) / (-hospitalX + obstacle.x)
                    obstacle.toHospitalEquationA = a
                    obstacle.toHospitalEquationB = obstacle.y - a * obstacle.x
                }
            }
            // Update score for the Hospital
            if(obstacle.detectHospitalEntry()){
                //Collision with the hospital detected
                this.obstacles.splice(i, 1) // Delete object
                i++
                this.scoreboard.updateScore(obstacleType)
                // Play sound
                const enterHospitalSound = new Audio ("sounds/hospital_sound.wav")
                enterHospitalSound.play()
            }

        this.time += 0.02;
    }
}
    
    arrayObstacles (timestamp) {
        // Virus will be generating         
        if(this.virusTimer < timestamp - this.virusRate){
            this.virusTimer = timestamp
            const obstacle = new Obstacle(this, Math.random()*600, 10, 30, 30, this.speed,'images/virus.png', 'virus');
            this.obstacles.push(obstacle);
        }

        // MedicalKit will be generating 
        if(this.medicalKitTimer < timestamp - this.medicalKitRate){
            this.medicalKitTimer = timestamp
            const obstacle = new Obstacle(this, this.inicialX + 10, this.inicialY, 20, 20, this.speed, 'images/kit.png', 'kit');
            this.obstacles.push(obstacle);
        }

        // Gloves will be generating
        if(this.glovesTimer === 0 || !this.glovesTimer){
            this.glovesTimer = timestamp
        }else if(this.glovesTimer < timestamp - this.glovesRate){
            this.glovesTimer = timestamp
            const obstacle = new Obstacle(this, this.inicialX, this.inicialY, 20, 20, this.speed, 'images/gloves.png', 'gloves');
            this.obstacles.push(obstacle);
        }

        // Inhaler will be generating
        if(this.inhalerTimer < timestamp - this.inhalerRate){
            this.inhalerTimer = timestamp
            const obstacle = new Obstacle(this, this.inicialX, this.inicialY, 20, 20, this.speed, 'images/inhaler.png', 'inhaler');
            this.obstacles.push(obstacle);
        }

    }   


    obstacleDraw () {
       for(let obstacle of this.obstacles){
           obstacle.draw()
       }
      }
    
    drawGame () {

        if(this.running === true) {
            this.clearCanvas();
            this.background.draw();
            this.character.draw();
            this.obstacleDraw()
            this.scoreboard.draw();
    }
    }

    // gameMusic() {
    //     if (!this.running) {
    //         console.log('audio is stoped')
    //         gameMusic.pause();
    //         // gameMusic.currentTime=0;
    //     } else {
    //         console.log('audio is playing')
    //         gameMusic.play()}
    // }
    
    start () {
        this.running = true;
        this.gameMusic.play();
        this.loop();
    }

    pause () {
        this.running = false;
        this.gameMusic.pause();
    }

    gameOver () {
        this.running = false;
        this.gameMusic.pause();
        
        const context = this.context;
        const gameoverimage = new Image();

        gameoverimage.src = 'images/gameover.png';
        gameoverimage.addEventListener('load', () =>{
            context.drawImage(gameoverimage, 0, 0)
        })
        context.drawImage(gameoverimage, 0, 0)
        
        const gameoverSound = new Audio ("sounds/GameOver.wav")
        gameoverSound.play()
        
        }
        

    reset () {
        
        this.character = new Character (this, 300, 400, 75, 30);
            
        this.background = new Background(this);
    
        this.obstacles=[]
                
        this.scoreboard = new Scoreboard(this);
        
        this.score = 0; 
        this.speed = 1;
    }
}