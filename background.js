class Background {
    constructor (game) {
    this.game = game;
    }
    
    
    draw () {
        // console.log('draw backround called')
        const context = this.game.context;
        const backgroundimage = new Image();

        backgroundimage.src = 'images/mountain_full_background.png';

        context.drawImage(backgroundimage, 0, 0)
    }
}



// runLogic () {
    
// }

// detectCollision() {
    
    // }