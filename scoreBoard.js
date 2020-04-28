class Scoreboard {
    constructor (game) {
      this.game = game;
  
    }
  
    draw () {
      // console.log('the score board is being drawd')
      const context = this.game.context;
      const score = this.game.score;
  
      // console.log('the score in scoreboard is '+ score);
  
      context.font = '24px sans-serif';
  
      context.fillText(`${score} Points`, 25, 25);
    }
  }