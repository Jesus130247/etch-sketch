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
            boxN.addEventListener('mouseover', changeColour)
        }
    }
}
createGrid(16,16)

function changeColour() {
    this.style.backgroundColor = 'red'
}