class Character {
    constructor (game) {
        this.game = game;
    }

    runLogic () {
        const character = this.game.character;
    }

    // detectCollision() {

    // }


    draw () {
        // console.log('draw character called')
        const context = this.game.context;
        const characterimage = new Image();
        characterimage.width = 70;
        characterimage.height = 50;
        characterimage.src = 'images/trampolim.png';

        characterimage.addEventListener('load', () =>{
            context.drawImage(characterimage, this.x, this.y, characterimage.width, characterimage.height )
        }
        )
        context.drawImage(characterimage, this.x, this.y, characterimage.width, characterimage.height )
    }


    moveLeft () {
        const characterimage = new Image();
        console.log('O x é ' + this.x)
        const basePixel = Number($canvas.width/25);
        console.log('this x maior ou igual que ' + basePixel)
        if (this.x >= basePixel){
            console.log('true')
            this.x = this.x - basePixel;
        } else {this.x = 0
            console.log('false')}
        }

    // moveLeft() {
    //     this.x = this.x - 15;
    //     console.log('Player moved left. The x is ' + this.x);
    // }


    moveRight () {
        const characterimage = new Image();
        characterimage.width = 70;
        characterimage.height = 50;
        console.log('O x é ' + this.x)
        const basePixel = Number($canvas.width/25);
        console.log('a largura da imagem é ' + characterimage.width)
        console.log('this x menor ou igual que ' + ($canvas.width - basePixel - characterimage.width))
        if (this.x <= ($canvas.width - basePixel - characterimage.width)){
            console.log('true')
            this.x = this.x + basePixel;
        } else {this.x = $canvas.width - characterimage.width;
            console.log('false')}
        }

    // moveRight() {
    //     this.x = this.x + 15;
    //     console.log('Player moved left. The x is ' + this.x);
    // }
        

}