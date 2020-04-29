class Scoreboard {
    constructor (game) {
      this.game = game;
  
    }

    updateScore (obstacleType) {
          switch (obstacleType) {
              case 'virus':
                  this.game.score = this.game.score -50;
                  break;
              case 'kit':
                  this.game.score = this.game.score + 60; //updates sco res
                  break;
              case 'inhaler':
                  this.game.score = this.game.score + 20;
                  break;
              case 'gloves':
                  this.game.score = this.game.score + 5;
                  break;
                  }
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