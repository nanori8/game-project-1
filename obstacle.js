class Obstacle {
    constructor (game, x, y, width, height, speed,image) {
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
    }

    runLogic () {
        this.y = this.y + this.speed;
        //this.x = this.x + Math.sin(this.speed);
        //this.x = this.x + this.speed;
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