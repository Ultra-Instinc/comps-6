import { Fragment } from "react"

const Table = ({data,config,keyFn}) => {
    const renderedHeaders=config.map((column)=>{
        if (column.header){
            return <Fragment key={column.label}> {column.header()}</Fragment>
        }
        return <th key={column.label}> {column.label}</th>
    })
    const renderedRows=data.map((row)=>{                              //1 + 2 = 3 
        const renderedCells=config.map((column)=>{ 
            return <td className="p-2" key={column.label} > 
                        {column.render(row)} 
                   </td> //1
        })
        return (
            <tr key={keyFn(row)} className="border-b hover:bg-opacity-75">
                 {renderedCells}                         {/*           //2 */}

                {/* <td className="p-3">{config[0].render(rowData)}</td> //3
                <td className="p-3">{config[1].render(rowData)}</td>     //3
                <td className="p-3">{config[2].render(rowData)}</td>     //3    */} 
            </tr>
        )
    })
    return ( 
    <table className="table-auto border-spacing-2">
        <thead>
            <tr className="border-b-2">
                {renderedHeaders}
            </tr>
        </thead>    
        <tbody>
            {renderedRows}
        </tbody>
    </table> );
}
 
export default Table;