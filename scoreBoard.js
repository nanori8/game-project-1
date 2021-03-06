class Scoreboard {
    constructor (game) {
      this.game = game;
      this.game.$canvas = $canvas.width
      this.hospitalX = 500
      this.hospitaly = 190
    }

    updateScore (obstacleType) {

      switch (obstacleType) {
        case 'kit':
          this.game.score = this.game.score + 60;
          break;
        case 'inhaler':
          this.game.score = this.game.score + 20;
          break;
        case 'gloves':
          this.game.score = this.game.score + 5;

          break;
        case 'virus':
          this.game.score = this.game.score -40;
          if(this.game.score<0 && Number(this.game.score)){
            this.game.gameOver()
          this.game.running = false};

          break;
        }
  }

  
    draw () {
      const context = this.game.context;
      const score = this.game.score;

      context.save();
      context.globalAlpha = 0.1;
      context.fillstyle = 'red';
      context.fillRect(520, 12, 130, 40);
      context.restore();
      
      context.save();
      context.fillstyle = 'darkgrey';
      context.font = '20px sans-serif';
      context.textAlign = "center";
      context.fillText(`${score} Points`, $canvas.width - 120, 40);
      context.restore();
    }
  }