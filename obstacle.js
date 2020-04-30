class Obstacle {
    constructor (game, x, y, width, height, speed, image, imageName) {
        this.game = game;
        this.width = this.game.$canvas.width
        this.basePixel = this.game.basePixel;
        this.context = this.game.context;

        this.trampolineTime = 0
        this.hospitalTime = 1

        this.width = 20;
        this.height = 20;

        this.toHospital = false

        this.toHospitalEquationA = 0
        this.toHospitalEquationB = 0

        this.hospitalX = 500
        this.hospitaly = 190

        this.obstacleImage = new Image();
        this.obstacleImage.src = image

        this.imageName = imageName;

        this.setInitialPositions(x, y, speed, imageName)

        this.gravity = 1.5;
    }

    setInitialPositions(x,y, speed, imageName){
        if(imageName === 'virus'){
            this.x = x
            this.y = y
            this.speed = speed
        }else{
            this.x = 80
            this.y = 190
            this.speed = Math.random()*1.5;
        }
    }

    detectCollision () {
            if ((this.y + this.height) >= (this.game.character.y)
                && this.x + this.width > this.game.character.x
                && this.x < (this.game.character.x + this.game.character.width)
                ) {
                    return true
                }
    }

    detectHospitalEntry () {
        console.log('this.hospitaly', this.hospitaly)
        console.log('this.y', this.y)
        console.log('this.height', this.height)

        if ((this.y + this.height) <= (this.hospitaly)

            // && this.x + this.width > this.game.character.x
            // && this.x < (this.game.character.x + this.game.character.width)
            ) {
                console.log('collision true')
                return true
            }
        }
    
    runLogicVirus () {
        this.y++
    }

    runLogic () {
        if(!this.toHospital){
            this.sendToTrampolin()
            this.trampolineTime +=0.1
        }else{
            this.sendToHospital()
            this.hospitalTime +=0.5
        }
        
    }

    sendToTrampolin(){
        this.x = 80 + this.speed*2 * this.trampolineTime**2;
        this.y = 190 + this.gravity * this.trampolineTime **2;
        
    }

    sendToHospital(){
        const a = this.toHospitalEquationA
        const b = this.toHospitalEquationB
        this.x += this.hospitalTime
        this.y = a * this.x + b
        console.log('x ',this.x)
        console.log('t ',this.y)
        this.detectHospitalEntry()
    }
    

    draw () {
        // console.log('draw obstacle called')

        this.obstacleImage.addEventListener('load', () =>{
            this.game.context.drawImage(this.obstacleImage, this.x, this.y, this.width, this.height)
        }
        )
        this.game.context.drawImage(this.obstacleImage, this.x, this.y, this.width, this.height)
    }

}