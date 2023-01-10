import {Bfs, Dfs} from "./Algorithms";

export function Main(fileContents)  {
    console.log(fileContents)
    const allLines = fileContents.split(/\r\n|\n/);
    let matriz = [];
    allLines.forEach((line) => {
        let mline = [];
        for(let i = 0; i < line.length; i++){
            mline.push(line[i]);
        }
        matriz.push(mline)
    });
    let algo = new Dfs(matriz);
    let algo2 = new Bfs(matriz);

    let startT1 = performance.now()
    algo.run();
    let endT1 = performance.now()
    let t1 = endT1 - startT1

    let startT2 = performance.now()
    algo2.run();
    let endT2 = performance.now()
    let t2 = endT2 - startT2

    let returnObject = {
        matrix: algo.matrix,
        dfs: algo,
        dfsT: t1,
        bfs: algo2,
        bfsT: t2
    }

    console.log(returnObject)

    return returnObject
}

