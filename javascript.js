function createGrid(width, height) {
    const ROW = document.querySelector('.container')
    let divRow = undefined
    // const COLUMN = document.querySelector('.column')
    // let divColumn = undefined

    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            divRow = document.createElement('div')
            ROW.appendChild(divRow)
            console.log(i)
            console.log(j)
        }
    }


}

createGrid(16,16)

// I have a big box called container
// within container, i currently have 2 containers.
// container 1 = ROW: is my row box
// container 2 = COLUM: is my column box
// so the issue is, even tho i can create infinte boxs to put into these containers, they only ever exist within 2 containers

// POSSIBLE SOLUTIONS

// ------- I can try and make each of those containers a fixed size, and make it flex wrap. but if thats the case, why don't i try just putting 256 boxs
// into the original containers. Ill try that
// THIS WORKS --- negative: HARD CODE, does not allow for any lee-way

// ------- I can try adding aditional containers, and then to those adding 16 boxs. For example; I have CONTAINER, to CONTAINER i add COLUMN_1, 
// to COLUMN_1 i add 16 boxs. then to CONTAINER i add COLUMN_2, and to COLUMN_2 i add 16 boxs.
// benefits of this: it means i could add COLUMN_n to CONTAINER, and to each COLUMN i could add n boxs.

// need to use js to create a div "box"
// need to use flexbox to align the box in the correct position
// need to use js to create a 16x16 grid. total of 256 boxs

// then need to use js to have hover effect on these boxs