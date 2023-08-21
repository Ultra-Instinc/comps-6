import UseSort from "../hooks/useSort";
import { GoChevronDown, GoChevronUp} from "react-icons/go";
import Table from "./table";
const SortableTable = (props) => {
    const {config , data} = props
    const{sortBy,sortOrder,sortedData,handleClick}=UseSort({data,config})
  
    const updatedConfig=config.map((column)=>{
        if(!column.sortValue){
            return column
        }
        return {
            ...column,
            header:()=> 
                <th className="cursor-pointer hover:bg-gray-100" onClick={()=>handleClick(column.label)} >
                    <div className="flex items-center">
                    {getIcons(column.label,sortBy,sortOrder)}
                    {column.label}
                    </div>
                </th>
        }
    })


 
    return( 
    <div>
      
         <Table  {...props} data={sortedData} config={updatedConfig}  /> {/*// the config prop in the props will be over written */}
    </div>)
}
 
function getIcons(label,sortBy,sortOrder){
    if (label !== sortBy){
        return <div>
            <GoChevronUp/>
            <GoChevronDown/>
        </div>
    }
    if (sortOrder=== null){
        return <div>
            <GoChevronUp/>
            <GoChevronDown/>
        </div>
    }else if(sortOrder==='asc'){
        return <div>
            <GoChevronUp/>
            
        </div>
    }else if(sortOrder==='desc'){
        return <div>
        
            <GoChevronDown/>
        </div>
    }
}
export default SortableTable;