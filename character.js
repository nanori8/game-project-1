class Character {
    constructor (game, x, y, width, height, score) {
        this.game = game;
        this.game.$canvas = $canvas.width
        this.basePixel = this.game.basePixel;
        this.context = this.game.context;

        this.x = x;
        this.y = y;

        this.width = width;
        this.height = height;
        
        this.score = 0;

        this.characterimage = new Image();  
        
    }
    
    detectCollision () {
        for (let obstacle of this.game.obstacles){
            // console.log('obstacle.y' + obstacle.y + ' this y ' + this.y )
            // console.log('obstacle.x' + obstacle.x + ' this x ' + this.x )
            // console.log('this height' + this.height)
            // console.log('this width' + this.width)
            if ((obstacle.y + obstacle.height) >= (this.y)
                && obstacle.x + obstacle.width > this.x
                && obstacle.x < (this.x + this.width)
                ) {
                console.log('colided');
                this.game.score++;
            } 
            else {console.log("didnt colide")};
        }

        //console.log('the score is ' + this.score)
    }

    draw () {
        // console.log('draw character called')

        this.characterimage.src = 'images/fireman-trampoline-blue.png';

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
            // console.log('TRUE x  ' + this.x + ' is less than ' + ($canvas.width - this.basePixel - this.width))
            this.x = this.x + this.basePixel;
        } else {this.x = $canvas.width - this.width;
        }
        }     

}