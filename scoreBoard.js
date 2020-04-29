class Scoreboard {
    constructor (game) {
      this.game = game;
      this.game.$canvas = $canvas.width
  
    }

    updateScore (obstacleType) {
      switch (obstacleType) {
        case 'virus':
          this.game.score = this.game.score -50;
          this.game.gameOver();
          break;
        case 'kit':
          this.game.score = this.game.score + 60; 
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
      const context = this.game.context;
      const score = this.game.score;
      context.font = '24px sans-serif';
      context.fillText(`${score} Points`, $canvas.width - 120, 40);
    }
  }