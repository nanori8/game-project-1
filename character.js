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
    




    draw () {
        // console.log('draw character called')

        this.characterimage.src = 'images/red_trampoline.png';

        this.characterimage.addEventListener('load', () =>{
            this.game.context.drawImage(this.characterimage, this.x, this.y, this.width, this.height)
        }
        )
        this.game.context.drawImage(this.characterimage, this.x, this.y, this.width, this.height)
    }


    moveLeft () {
        console.log('this.x ' + this.x)
           if (this.x >= this.basePixel){
            this.x = this.x - this.basePixel;
        } else {this.x = 0
        }
        if(this.x < 130) {
        this.x = 130};
        
    }


    moveRight () {
        console.log('this.x ' + this.x)
        if (this.x <= ($canvas.width - this.basePixel - this.width)){
            // console.log('TRUE x  ' + this.x + ' is less than ' + ($canvas.width - this.basePixel - this.width))
            this.x = this.x + this.basePixel;
        } else {this.x = $canvas.width - this.width;
        }
        if(this.x > 340) {
            this.game.gameOver();
        }
    }     

}