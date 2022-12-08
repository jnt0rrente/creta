import { useEffect } from "react"

function cellToStyle(cell, solution) {
    let style = {padding: "1.5em"}

    if (cell.up == null) {
        style.borderTop = "4px solid"
    }

    if (cell.left == null) {
        style.borderLeft = "4px solid"
    }

    if (cell.down == null) {
        style.borderBottom = "4px solid"
    }

    if (cell.right == null) {
        style.borderRight = "4px solid"
    }

    if (solution) {
        solution.forEach(solCell => {
            if (cell.name === solCell.name) {
                console.log("coloring " + cell.name)
                style.backgroundColor = "#B99EFF"
            } else {
                console.log("not coloring " + solCell.name)
            }
        });
    }
    if (cell.end) style.backgroundColor = "lightBlue"
    if (cell.start) style.backgroundColor = "lightGreen"

    return style
}

export default function Table({matrix, solution}) {

    useEffect(() => {
        console.log("Loaded: ")
        console.log(matrix)
    }, [matrix])

    return (
        (matrix == null) ? <></> 
        : (
            <>
                <table style={{border: "1px solid", borderCollapse: "collapse"}}>
                    <tbody>
                        {
                            (matrix.map((row, index) => (
                                <tr key={"row"+index}>
                                    {
                                        row.map((cell) => (
                                            <td key={cell.name} style={cellToStyle(cell, solution)}>
                                                {}
                                            </td>
                                        ))
                                    }
                                </tr>
                            )))
                        }
                    </tbody>
                </table>
            </>
        )
        
    )
}