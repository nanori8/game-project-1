class Obstacle {
    constructor (game, x, y, width, height, speed, image, imageName) {
        this.game = game;
        this.width = this.game.$canvas.width
        this.basePixel = this.game.basePixel;
        this.context = this.game.context;

        this.x = x;
        this.y = y;

        this.width = width;
        this.height = height

        this.speed = speed;

        this.obstacleImage = new Image();
        this.obstacleImage.src = image

        this.imageName = imageName;

        this.inicialX = 80;
        this.inicialY = 190;
        this.gravity = 10 
    }

    detectCollision () {
            if ((this.y + this.height) >= (this.game.character.y)
                && this.x + this.width > this.game.character.x
                && this.x < (this.game.character.x + this.game.character.width)
                ) {
                    console.log('collision true')
                    return true
                }
    }

    runLogic () {

        console.log("runLogic is running")

        console.log("this.x "+ this.x)

        console.log("this.inicialX " + this.inicialX)

        // this.y = this.y + Math.sin(this.speed);

        // x=80 y=190


        console.log('X : ', this.inicialX, this.speed, this.game.time);
        console.log('Y :', this.inicialY, this.gravity, this.game.time);
        // this.x = this.inicialX + this.speed * this.game.time;
        this.x = this.inicialX + this.speed * this.game.time;

        
        // this.y = this.inicialY - this.gravity * this.game.time **2 
        this.y = this.inicialY - this.gravity * this.game.time **2;

        // velocidade pode ser gravidade
        //gravidade 

        // this.x = this.x + this.speed;
    }
    
    runLogicVirus () {
        this.y++
    }

    draw () {
        // console.log('draw obstacle called')

        this.obstacleImage.addEventListener('load', () =>{
            this.game.context.drawImage(this.obstacleImage, this.x, this.y, this.width, this.height)
        }
        )
        this.game.context.drawImage(this.obstacleImage, this.x, this.y, this.width, this.height)
    }

}