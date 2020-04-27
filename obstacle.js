class Obstacle {
    constructor (game, x, y, width, height) {
        this.game = game;
        this.game.$canvas = $canvas.width
        this.basePixel = this.game.basePixel;
        this.context = this.game.context;

        this.x = x;
        this.y = y;

        this.width = width;
        this.height = height

        this.obstacleImage = new Image();
    }

    // runLogic () {

    // }

    // detectCollision() {

    // }


    draw () {
        console.log('draw obstacle called')

        this.obstacleImage.src = 'images/pill-red.png';

        this.obstacleImage.addEventListener('load', () =>{
            this.game.context.drawImage(this.obstacleImage, this.x, this.y, this.width, this.height)
        }
        )
        this.game.context.drawImage(this.obstacleImage, this.x, this.y, this.width, this.height)
    }

}