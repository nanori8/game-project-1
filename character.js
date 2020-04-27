class Character {
    constructor (game) {
        this.game = game;
    }

    // runLogic () {
    //     const character = this.game.character
    // }

    // detectCollision() {

    // }


    draw () {
        // console.log('draw character called')
        const context = this.game.context;
        const characterimage = new Image();
        characterimage.width = 70;
        characterimage.height = 50;
        // this.x = 300
        // this.y = 450
        console.log('initial x is ' + this.x)

        characterimage.src = 'images/trampolim.png';

        characterimage.addEventListener('load', () =>{
            context.drawImage(characterimage, this.x, this.y, characterimage.width, characterimage.height )
        }
        )
        context.drawImage(characterimage, this.x, this.y, characterimage.width, characterimage.height )
    }

    moveLeft() {
        this.x = this.x - 50;
        console.log('Player moved left. The x is ' + this.x);
    }
    moveRight() {
        this.x = this.x + 50;
        console.log('Player moved left. The x is ' + this.x);
    }
        

}