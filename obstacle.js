class Obstacle {
    constructor (game, x, y, width, height, speed, image, imageName) {
        this.game = game;
        this.width = this.game.$canvas.width
        this.basePixel = this.game.basePixel;
        this.context = this.game.context;

        this.x = x;
        this.y = y;

        this.width = 20;
        this.height = 20;

        this.speed = speed;

        this.obstacleImage = new Image();
        this.obstacleImage.src = image

        this.imageName = imageName;

        this.inicialX = 80;
        this.inicialY = 190;

        this.gravity = 2 
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


        // this.y = this.y + Math.sin(this.speed);

        // x=80 y=190


        console.log('X : ', this.inicialX, this.speed, this.game.time);
        console.log("this.x "+ this.x)
        console.log('Y :', this.inicialY, this.gravity, this.game.time);
        console.log("this.y "+ this.y)

        this.x = this.inicialX
        this.x = this.inicialX + this.speed*2 * this.game.time**2;

        this.y = this.inicialY
        this.y = this.inicialY + this.gravity * this.game.time **2;
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