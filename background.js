class Background {
    constructor (game) {
    this.game = game;
    }
    
    
    draw () {
        const context = this.game.context;
        const backgroundimage = new Image();

        backgroundimage.src = 'images/mountain_full_background.png';
        backgroundimage.addEventListener('load', () =>{
            context.drawImage(backgroundimage, 0, 0)
        }
        )
        context.drawImage(backgroundimage, 0, 0)
    }
}