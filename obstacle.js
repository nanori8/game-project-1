class Obstacle {
    constructor (game) {
        this.game = game;
    }
    
    // runLogic () {
        
        
        // }
        
        
    draw () {
        const context = this.game.context;
        const obstacleImage = new Image();
        obstacleImage.width = 70;
        obstacleImage.height = 50;
        console.log('initial x is ' + this.x)

        obstacleImage.src = 'images/trampolim.png';

        obstacleImage.addEventListener('load', () =>{
            context.drawImage(obstacleImage, this.x, this.y, obstacleImage.width, obstacleImage.height )
        }
        )
        context.drawImage(obstacleImage, this.x, this.y, obstacleImage.width, obstacleImage.height )

    }


}