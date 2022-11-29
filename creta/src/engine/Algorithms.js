import {Cell} from "./Cell";

export class Algorithms {

    constructor(matrix) {
        this.matrix = [];

        for(let i = 1; i < matrix.length - 2; i += 2){
            let line = [];
            for(let j = 1; j < matrix[0].length; j += 2){
                line.push(new Cell(null,null,null,null));
            }
            this.matrix.push(line)
        }

        for(let i = 0; i < this.matrix.length; i ++){
            for(let j = 0; j < this.matrix[i].length; j++){
                this.matrix[i][j].setName = i + "-" + j
                this.createWalls(i,j, matrix);
            }
        }

        this.startNode = this.matrix[matrix[matrix.length-2][0]][matrix[matrix.length-2][2]];

        this.endNode = this.matrix[matrix[matrix.length-1][0]][matrix[matrix.length-1][2]];

    }

    get getMatrix(){
        return this.matrix;
    }

    createWalls(i, j, matrix) {
        this.matrix[i][j].setUp = this.checkBlank(matrix, (i*2 + 1) - 1, (j*2 + 1), i-1, j)
        this.matrix[i][j].setLeft = this.checkBlank(matrix, (i*2 + 1), (j*2 + 1) - 1, i, j-1)
        this.matrix[i][j].setDown = this.checkBlank(matrix, (i*2 + 1) + 1, (j*2 + 1), i+1, j)
        this.matrix[i][j].setRight = this.checkBlank(matrix, (i*2 + 1), (j*2 + 1) + 1, i, j+1)
    }

    checkBlank(matrix, i, j, i2, j2) {
        if ( !(i === 0 || j === 0) && (i2 < this.matrix.length && j2 < this.matrix[0].length) && matrix[i][j] === " "  ) {
            return this.matrix[i2][j2];
        } else {
            return null;
        }
    }

    run () {

    }
}

export class Dfs extends Algorithms {

}