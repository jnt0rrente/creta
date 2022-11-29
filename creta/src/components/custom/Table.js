import { useEffect } from "react"

function cellToStyle(cell) {
    let style = {padding: "1em"}

    if (cell.up == null) {
        style.borderTop = "1px solid"
    }

    if (cell.left == null) {
        style.borderLeft = "1px solid"
    }

    if (cell.down == null) {
        style.borderBottom = "1px solid"
    }

    if (cell.right == null) {
        style.borderRight = "1px solid"
    }

    if (cell.end) style.backgroundColor = "blue"
    if (cell.start) style.backgroundColor = "green"

    return style
}

export default function Table({matrix}) {

    useEffect(() => {
        console.log("Loaded: ")
        console.log(matrix)
    }, [matrix])

    return (
        (matrix == null) ? <></> 
        : (
            <>
                <p>Loaded Maze:</p>
                <table style={{border: "1px solid", borderCollapse: "collapse"}}>
                    <tbody>
                        {
                            (matrix.map((row, index) => (
                                <tr key={"row"+index}>
                                    {
                                        row.map((cell) => (
                                            <td key={cell.name} style={cellToStyle(cell)}>
                                                {cell.name}
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