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
        this.y = this.y + this.speed;
        // this.x = this.x + Math.sin(this.speed);
        // tempo = 0;
        // x + velocidade * tempo + 0,1 
        // y + velocidade * tempo**2 + 0,1 

        // velocidade pode ser gravidade
        //gravidade 
        this.x = this.x + this.speed;
    }
    
    runLogicVirus () {
        this.y = this.y + this.speed;
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