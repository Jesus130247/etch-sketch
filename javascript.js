// function takes grid dimensions. It creates the number of columns you want,
// ----- it then adds the number of boxs you want to each column.
function createGrid(column_number, box_number) {
    const container = document.querySelector('.container')
    let divCOLUMN = undefined
    let boxN = undefined
    for (let i = 0; i < column_number; i++) {
        divCOLUMN = document.createElement('div')
        container.appendChild(divCOLUMN)
        for (let j = 0; j < box_number; j++) {
            boxN = document.createElement('div')
            divCOLUMN.appendChild(boxN)
        }
    }
}
createGrid(8,8)

function changeColour() {
    const box = document.querySelector('.container div div')
    box.style.backgroundColor = 'red'
}
function changeColourBack() {
    const box = document.querySelector('.container div div')
    box.style.backgroundColor = 'white'
}
 // I now need to create a function that lights up the boxs when i hover over them
 const hover = document.querySelector('.container div div')
 hover.addEventListener('mouseover',  () => {
    console.log('moused in')
    changeColour()
 })
 hover.addEventListener('mouseout', () => {
    console.log('moused out')
    changeColourBack()
 })
//  even tho each box is '.container div div' it only ever registers in the first box