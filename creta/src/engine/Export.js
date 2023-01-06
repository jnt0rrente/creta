function getEmptyOutputMatrix() {
    let newMatrix = []
    for (let i = 0; i < 17; i++) {
        let row = []
        for (let j = 0; j < 17; j++) {
            row.push(" ")
        }
        newMatrix.push(row)
    }

    return newMatrix
}

function coordsNativoACoordsArchivo(i, j) {
    return (
        {
            i: (i*2)+1,
            j: (j*2)+1
        }
    )
}

export function mazeTranspile(creatingMatrix, startI, startJ, endI, endJ) {
    let buffer = getEmptyOutputMatrix()

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let cell = creatingMatrix[i][j]
            let coordsArchivo = coordsNativoACoordsArchivo(i,j)

            if (cell.walls.top) {
                buffer[coordsArchivo.i-1][coordsArchivo.j] = "-"
            }
            if (cell.walls.bottom) {
                buffer[coordsArchivo.i+1][coordsArchivo.j] = "-"
            }
            if (cell.walls.right) {
                buffer[coordsArchivo.i][coordsArchivo.j+1] = "|"
            }
            if (cell.walls.left) {
                buffer[coordsArchivo.i][coordsArchivo.j-1] = "|"
            }
        }
    }

    let strBuffer = ""

    for (let i = 0; i < 17; i++) {
        let str = ""
        for (let j = 0; j < 17; j++) {
            str += buffer[i][j]
        }
        strBuffer += str + "\n"
    }

    strBuffer += startI + "," + startJ + "\n"
    strBuffer += endI + "," + endJ

    console.log("Generated maze:")
    console.log(strBuffer)

    return strBuffer
}

// - - - - - - - -
// | |     |       |
//          - - -   
// | |     |     | |
//            - -   
// | | |   | |   | |
                 
// | | |   | |     |
                 
// |   |     |   | |
//        - -       
// |   |         | |
//        - - - -   
// |   |           |
//    - - - - - - - 
// |               |
//  - - - - - - - - 
// 0,0
// 0,4