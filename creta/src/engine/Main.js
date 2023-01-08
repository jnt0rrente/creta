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
    // console.log(matriz);
    // console.log(algo.matrix);
    // console.log(algo.startNode);
    // console.log(algo.endNode);

    let startT1 = performance.now()
    algo.run();
    let endT1 = performance.now()
    let t1 = endT1 - startT1
    // console.log("DFS");
    // console.log(algo.stack);
    // console.log(algo.step);
    // console.log(algo.matrix);
    // console.log("\n");

    let startT2 = performance.now()
    algo2.run();
    let endT2 = performance.now()
    let t2 = endT2 - startT2
    // console.log("BFS");
    // console.log(algo2.result)
    // console.log(algo2.stack);
    // console.log(algo2.step);
    // console.log(algo2.matrix);

    let returnObject = {
        matrix: algo.matrix,
        dfs: algo,
        dfsT: t1,
        bfs: algo2,
        bfsT: t2
    }

    return returnObject
}

