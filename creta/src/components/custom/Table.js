import { useEffect } from "react"

function cellToStyle(cell) {
    let style = {padding: "1.5em"}

    if (cell.up == null) {
        style.borderTop = "2px solid"
    }

    if (cell.left == null) {
        style.borderLeft = "2px solid"
    }

    if (cell.down == null) {
        style.borderBottom = "2px solid"
    }

    if (cell.right == null) {
        style.borderRight = "2px solid"
    }

    if (cell.end) style.backgroundColor = "lightBlue"
    if (cell.start) style.backgroundColor = "lightGreen"

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
                <table style={{border: "1px solid", borderCollapse: "collapse"}}>
                    <tbody>
                        {
                            (matrix.map((row, index) => (
                                <tr key={"row"+index}>
                                    {
                                        row.map((cell) => (
                                            <td key={cell.name} style={cellToStyle(cell)}>
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