import { hightBlock, widthBlock, highBoard, widthBoard } from './setup.js'
import { blocks, addBlocks } from './block.js'
import { user, displayUser, moveUser } from './user.js'
import { ball, displayBall, moveBall } from './ball.js'

const containerGame = document.querySelector('.container-game')

addBlocks(blocks, containerGame)

//Add user and ball
containerGame.appendChild(user.userBlock)
displayUser(user)
containerGame.appendChild(ball.displayedBall)
displayBall(ball)

document.addEventListener('keydown', function (e) { moveUser(user, e) })

const timerId = setInterval(() => { moveBall(ball, timerId) }, 20)
