class Character {
    constructor (game, x, y, width, height) {
        this.game = game;
        this.game.$canvas = $canvas.width
        this.basePixel = this.game.basePixel;
        this.context = this.game.context;

        this.x = x;
        this.y = y;

        this.width = width;
        this.height = height;

        this.characterimage = new Image();

        const obstacle = this.game.obstacle;

        const score = this.game.score

    }

    detectCollision () {
        if (this.game.obstacle.x === this.x && this.game.obstacle.y === this.y) {
        this.score++;
        // // this.speed += 1;
        // fruit.placeRandomly();
        // // Play sound of eating fruit
        // eatingNoise.play();
        } 
        // else {
        // this.blocks.shift();
        console.log('the score is ' + this.score)
    }

    draw () {
        // console.log('draw character called')

        this.characterimage.src = 'images/trampolim.png';

        this.characterimage.addEventListener('load', () =>{
            this.game.context.drawImage(this.characterimage, this.x, this.y, this.width, this.height)
        }
        )
        this.game.context.drawImage(this.characterimage, this.x, this.y, this.width, this.height)
    }


    moveLeft () {
           if (this.x >= this.basePixel){
            this.x = this.x - this.basePixel;
        } else {this.x = 0
        }
        }


    moveRight () {
        if (this.x <= ($canvas.width - this.basePixel - this.width)){
            // console.log('TRUE x é ' + this.x + 'e x menor que ' + ($canvas.width - this.basePixel - this.width))
            this.x = this.x + this.basePixel;
        } else {this.x = $canvas.width - this.width;
        }
        }     

}