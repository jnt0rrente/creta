export class Cell {

    constructor(up, down, right, left) {
        this.up = up;
        this.right = right;
        this.left = left;
        this.down = down;
        this.visited = false;
        this.value = 0;
        this.end = false;
        this.name = "";
    }

    get isEnd(){
        return this.visited();
    }

    set setEnd(end) {
        this.end = end;
    }

    set setUp(up) {
        this.up = up;
    }

    set setDown(down) {
        this.down = down;
    }

    set setLeft(left) {
        this.left = left;
    }

    set setRight(right) {
        this.right = right;
    }

    get isVisited(){
        return this.visited;
    }

    set setVisited(visited) {
        this.visited = visited;
    }

    get getValue(){
        return this.value;
    }

    set setName(name){
        this.name = name;
    }

}
