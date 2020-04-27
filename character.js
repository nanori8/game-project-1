class Character {
    constructor (game, x, y, width, height) {
        this.game = game;
        this.game.$canvas = $canvas.width
        this.basePixel = this.game.basePixel;
        this.context = this.game.context;

        this.x = x;
        this.y = y;

        this.width = 70;
        this.height = 50

        this.characterimage = new Image();
    }

    // runLogic () {

    // }

    // detectCollision() {

    // }


    draw () {
        console.log('draw character called')

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