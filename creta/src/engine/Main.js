import {Dfs} from "./Algorithms";

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
    console.log(matriz);
    console.log(algo.matrix);
    console.log(algo.startNode);
    console.log(algo.endNode);
    algo.run();
    console.log(algo.stack);
    console.log(algo.step);
    console.log(algo.matrix);
    return matriz
}

