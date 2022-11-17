import {update as updateSnake,draw as drawSnake,SNAKE_SPEED,getSnakeHead,snakeIntersection} from './snake.js'
import {update as updateFood,draw as drawFood} from './food.js'
import {outsideGrid} from './grid.js'


let lastRenderTime=0
let gameOver=false
const gameBoard = document.getElementById('game-board')
function main(currentTime){
    if(gameOver){
        if(confirm('you died,press ok to play again')){
            window.location='/'
        }
        return 
    }
    window.requestAnimationFrame(main)//bu method sayfanın sürekli olarak ne kadarda bir reload olacağını belirler.
    const secondSinceLastRender=(currentTime-lastRenderTime)/1000 //millisecond to second
    if(secondSinceLastRender < 1 / SNAKE_SPEED) return // yılan bir kare hareket edene kadar loopda kalır 
                                                       // böylece yılan hareket etmeden sayfa reload olmaz
    
    lastRenderTime=currentTime

    update()
    draw()
}
window.requestAnimationFrame(main)

function update(){
    updateSnake()
    updateFood()
    checkDeath()
}

function draw(){
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}
function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()

}