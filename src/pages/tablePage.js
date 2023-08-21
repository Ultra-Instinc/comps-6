// import SortableTable from "../conponents/sortableTable";
// import Table from "../conponents/table";
import SortableTable from './../conponents/sortableTable';
const TablePage = () => {
    const data=[
        {id:1,name:'Orange',color:'bg-orange-400',score:5},
        {id:2,name:'Apple',color:'bg-red-400',score:3},
        {id:3,name:'Banana',color:'bg-yellow-400',score:1},
        {id:4,name:'Lime',color:'bg-green-300',score:4}
    ]

    const config=[
        { 
            label:'Name',
            render:(fruit)=> fruit.name,
            sortValue:(fruit)=>fruit.name
        },
        {
            label:'Color',
            render:(fruit)=> <div className={`p-3 m-2 ${fruit.color}`}></div>    
        },
        {
            label:"Score",
            render:(fruit)=> fruit.score,
            sortValue:(fruit)=>fruit.score
        },
        
    ]
    const keyFn =(data)=>{
        return data.name
    }
    return ( <div>
        <SortableTable config={config} data={data} keyFn={keyFn}/>
    </div> );
}
 
export default TablePage;