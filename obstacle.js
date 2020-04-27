class Obstacle {
    constructor (game, x, y, width, height, speed) {
        this.game = game;
        this.game.$canvas = $canvas.width
        this.basePixel = this.game.basePixel;
        this.context = this.game.context;

        this.x = 10;
        this.y = 10;

        this.width = width;
        this.height = height

        this.speed = 5;

        this.obstacleImage = new Image();
    }

    runLogic () {
        this.y = this.y + this.speed;
        this.x = this.x + this.speed;
    }


    draw () {
        // console.log('draw obstacle called')

        this.obstacleImage.src = 'images/pill-red.png';

        this.obstacleImage.addEventListener('load', () =>{
            this.game.context.drawImage(this.obstacleImage, this.x, this.y, this.width, this.height)
        }
        )
        this.game.context.drawImage(this.obstacleImage, this.x, this.y, this.width, this.height)
    }

}