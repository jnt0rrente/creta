
function cellToStyle(cell, display) {
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

    if (display) {
        display.forEach(solCell => {
            if (cell.name === solCell.name) {
                style.backgroundColor = "#B99EFF"
            }
        });
    }
    if (cell.end) style.backgroundColor = "lightBlue"
    if (cell.start) style.backgroundColor = "lightGreen"

    return style
}

export default function Table({matrix, display}) {

    return (
        (matrix == null) ? <></> 
        : (
            <>
                <table style={{border: "1px solid", borderCollapse: "collapse", width: "4vh", alignSelf: "center"}}>
                    <tbody>
                        {
                            (matrix.map((row, index) => (
                                <tr key={"row"+index}>
                                    {
                                        row.map((cell) => (
                                            <td key={cell.name} style={cellToStyle(cell, display)}>
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