import { widthBlock, widthBoard, positionInitialUser } from './setup.js'

let positionActualUser = positionInitialUser

const userBlock = document.createElement('div')
userBlock.classList.add('user-block')

export const user = {
    userBlock,
    positionActualUser
}

export function displayUser(user) {
    user.userBlock.style.left = user.positionActualUser[0] + 'px'
    user.userBlock.style.bottom = user.positionActualUser[1] + 'px'
}

export function moveUser(user, e) {

    switch (e.key) {
        case 'ArrowLeft':
            if (user.positionActualUser[0] > 0) {
                user.positionActualUser[0] -= 10
                displayUser(user)
            }
            break
        case 'ArrowRight':
            if (user.positionActualUser[0] < (widthBoard - widthBlock)) {
                user.positionActualUser[0] += 10
                displayUser(user)

            }
            break
    }
}