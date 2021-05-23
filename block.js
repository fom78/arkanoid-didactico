import { hightBlock,widthBlock } from './setup.js'

//Define class Block
class Block{
    constructor(axisX, axisY){
        this.bottomLeft = [axisX, axisY]
        this.bottomRigth = [axisX + widthBlock, axisY]
        this.topLeft = [axisX, axisY + hightBlock]
        this.topRigth = [axisX + widthBlock, axisY + hightBlock]

    }
}
//Define all Blocks
export const blocks  = [
    new Block(10, 250),
    new Block(120, 250),
    new Block(230, 250),
    new Block(340, 250),
    new Block(450, 250),
    new Block(10, 220),
    new Block(120, 220),
    new Block(230, 220),
    new Block(340, 220),
    new Block(450, 220),
    new Block(10, 190),
    new Block(120, 190),
    new Block(230, 190),
    new Block(340, 190),
    new Block(450, 190),
]

export function addBlocks(blocks,containerGame){
    for(let i = 0; i < blocks.length; i++){
        const bloque = document.createElement('div')
        bloque.classList.add('block')
        bloque.style.left = blocks[i].bottomLeft[0] + 'px'
        bloque.style.bottom = blocks[i].bottomLeft[1] + 'px'
        containerGame.appendChild(bloque)   
    }
}
