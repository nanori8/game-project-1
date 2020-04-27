class Character {
    constructor (game) {
        this.game = game;
    }

    runLogic () {
        const obstacle = this.game.obstacle

    }

    // detectCollision() {

    // }


    draw () {
        console.log('draw character called')
        const context = this.game.context;
        const characterimage = new Image();
        characterimage.width = 70;
        characterimage.height = 50;

        characterimage.src = 'images/trampolim.png';

        context.drawImage(characterimage, ($canvas.width-characterimage.height)/2, $canvas.height - characterimage.height, characterimage.width, characterimage.height )
    }


}