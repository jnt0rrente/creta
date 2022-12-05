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
        return this.end;
    }

    setEnd(end) {
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

    isVisited(){
        return this.visited;
    }

    set setVisited(visited) {
        this.visited = visited;
    }

    get getValue(){
        return this.value;
    }

    setValue(value){
        this.value = value;
    }

    set setName(name){
        this.name = name;
    }

    checkWays () {
        let posWays = [];

        if(this.noWall(this.up) && !this.up.visited) posWays.push(this.up);
        if(this.noWall(this.left) && !this.left.visited)  posWays.push(this.left);
        if(this.noWall(this.down) && !this.down.visited) posWays.push(this.down);
        if(this.noWall(this.right) && !this.right.visited) posWays.push(this.right);

        return posWays
    }

    checkPrevious () {
        let posPrev = [];

        if(this.noWall(this.up) && this.up.visited && this.up.value < this.value) posPrev.push(this.up);
        if(this.noWall(this.left) && this.left.visited && this.left.value < this.value)  posPrev.push(this.left);
        if(this.noWall(this.down) && this.down.visited && this.down.value < this.value) posPrev.push(this.down);
        if(this.noWall(this.right) && this.right.visited && this.right.value < this.value) posPrev.push(this.right);

        posPrev.sort(function(a, b){return a - b})

        if(posPrev.length > 0){
            return posPrev[0];
        } else {
            return null;
        }

    }

    noWall(dir) {
        return dir !== null  ;
    }

    changeState(cont){
        this.visited = true;
        this.value = cont;
    }
}
