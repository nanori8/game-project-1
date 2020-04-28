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
        const obstacle = this.game.obstacle;

        console.log('this.game.obstacle.y' + this.game.obstacle.y);
        console.log('this.y' + this.y);

        if (this.game.obstacle.y === (this.y - this.game.obstacle.width)) {
            console.log('colided');
        this.score++;
        } 
        else {console.log("didnt colide")};

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
            // console.log('TRUE x  ' + this.x + ' is less than ' + ($canvas.width - this.basePixel - this.width))
            this.x = this.x + this.basePixel;
        } else {this.x = $canvas.width - this.width;
        }
        }     

}