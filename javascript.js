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

createGrid(16,16)

// I have a big box called container
// within container, i currently have 2 containers.
// container 1 = ROW: is my row box
// container 2 = COLUM: is my column box
// so the issue is, even tho i can create infinte boxs to put into these containers, they only ever exist within 2 containers

// ------- I can try adding aditional containers, and then to those adding 16 boxs. For example; I have CONTAINER, to CONTAINER i add COLUMN_1, 
// to COLUMN_1 i add 16 boxs. then to CONTAINER i add COLUMN_2, and to COLUMN_2 i add 16 boxs.
// benefits of this: it means i could add COLUMN_n to CONTAINER, and to each COLUMN i could add n boxs.
// THIS WORKS!!! i now have a dynamic grid.