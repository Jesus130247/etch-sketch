// function takes grid dimensions. It creates the number of columns you want,
// ----- it then adds the number of boxs you want to each column.
function createGrid(column_number, box_number) {
    const container = document.querySelector('.container')
    let divCOLUMN = undefined
    let boxN = undefined
    for (let i = 0; i < column_number; i++) {
        divCOLUMN = document.createElement('div')
        y = 496/column_number
        yString = y.toString() +'px'
        divCOLUMN.style.width = yString
        divCOLUMN.style.height = '496px'
        container.appendChild(divCOLUMN)
        for (let j = 0; j < box_number; j++) {
            x = 496/box_number
            xString = x.toString() +'px'
            boxN = document.createElement('div')
            boxN.style.width = yString
            boxN.style.height = xString
            divCOLUMN.appendChild(boxN)
            boxN.addEventListener('mouseover', changeColour)
        }
    }
}
createGrid(16,16)
function changeColour() {
    this.style.backgroundColor = 'red'
}