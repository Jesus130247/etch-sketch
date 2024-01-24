function createGrid(width, height) {
    const ROW = document.querySelector('.row')
    let divRow = undefined
    const COLUMN = document.querySelector('.column')
    let divColumn = undefined

    for (let i = 0; i < width; i++) {
        divRow = document.createElement('div')
        ROW.appendChild(divRow)
    }
    for (let i = 0; i < height; i++) {
        divColumn = document.createElement('div')
        COLUMN.appendChild(divColumn)
    }

}

createGrid(3,3)



// need to use js to create a div "box"
// need to use flexbox to align the box in the correct position
// need to use js to create a 16x16 grid. total of 256 boxs

// then need to use js to have hover effect on these boxs