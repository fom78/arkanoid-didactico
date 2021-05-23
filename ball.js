import { diameter, velocidad, widthBlock, widthBoard, hightBlock, highBoard, positionInitialBall } from './setup.js'
import { blocks } from './block.js'
import { user, moveUser } from './user.js'


let xDirectionBall = velocidad
let yDirectionBall = velocidad

let positionActualBall = positionInitialBall

const displayedBall = document.createElement('div')
displayedBall.classList.add('ball')

export const ball = {
    displayedBall,
    positionActualBall
}

export function displayBall(ball) {
    ball.displayedBall.style.left = ball.positionActualBall[0] + 'px'
    ball.displayedBall.style.bottom = ball.positionActualBall[1] + 'px'
}

export function moveBall(ball, timerId) {
    ball.positionActualBall[0] += xDirectionBall
    ball.positionActualBall[1] += yDirectionBall
    displayBall(ball)
    checkCollisions(ball)
    gameOver(timerId)
}

function checkCollisions(ball) {

    for (let i = 0; i < blocks.length; i++) {
        if ((ball.positionActualBall[0] > blocks[i].bottomLeft[0] && ball.positionActualBall[0] < blocks[i].bottomRigth[0]) &&
            ((ball.positionActualBall[1] + diameter) > blocks[i].bottomLeft[1] && ball.positionActualBall[1] < blocks[i].topLeft[1])
        ) {
            const todosLosBlocks = Array.from(document.querySelectorAll('.block'))
            todosLosBlocks[i].classList.remove('block')
            blocks.splice(i, 1)
            changeDirection()
        }
    }

    //Collisions with the walls
    if (
        ball.positionActualBall[0] >= (widthBoard - diameter) ||
        ball.positionActualBall[1] >= (highBoard - diameter) ||
        ball.positionActualBall[0] <= 0 ||
        ball.positionActualBall[1] <= 0
    ) {
        changeDirection()
    }
    //Collisions with the user
    if ((ball.positionActualBall[0] > user.positionActualUser[0] && ball.positionActualBall[0] < user.positionActualUser[0] + widthBlock) &&
        (ball.positionActualBall[1] > user.positionActualUser[1] && ball.positionActualBall[1] < user.positionActualUser[1] + hightBlock)
    ) {
        changeDirection()
    }

}

function changeDirection() {
    if (xDirectionBall === velocidad && yDirectionBall === velocidad) {
        yDirectionBall = -1 * velocidad
        return
    }
    if (xDirectionBall === velocidad && yDirectionBall === (-1 * velocidad)) {
        xDirectionBall = -1 * velocidad
        return
    }
    if (xDirectionBall === (-1 * velocidad) && yDirectionBall === (-1 * velocidad)) {
        yDirectionBall = velocidad
        return
    }
    if (xDirectionBall === (-1 * velocidad) && yDirectionBall === velocidad) {
        xDirectionBall = velocidad
        return
    }
}


function gameOver(timerId) {
    if (ball.positionActualBall[1] <= 0) {
        clearInterval(timerId)
        //document.removeEventListener('keydown', moveUser)
        document.removeEventListener('keydown', function (e) { moveUser(user, e) })

    }
}