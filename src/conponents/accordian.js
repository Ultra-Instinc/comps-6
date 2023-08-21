import { useState } from "react";
import { AiFillCaretDown, AiFillCaretLeft } from "react-icons/ai";
const Accordion = ({items}) => {
    const [expandedIndex,setExpandedIndex]=useState(-1)
    const handleClick=(nextIndex)=>{ // changes the state  // using functional state update     >>>>> set----  (  current +>{    return -value-   } )
        setExpandedIndex((currentExpandedIndex)=>{
            if(currentExpandedIndex === nextIndex ){
                return -1
            }else{
                return nextIndex
            }
            
        })    
    }


    const renderedItems=items.map((item,index)=>{
        const isExpanded = index===expandedIndex  //isExpanded= true if index===expandedIndex
        const icon = 
            <span className="text-2xl">
                {isExpanded?<AiFillCaretDown/>:<AiFillCaretLeft/>}
            </span>
        
        return (
            <div key={item.id} className="">
                <div 
                    className=" flex justify-between p-3 bg-gray-300 hover:bg-gray-200 border-b cursor-pointer" 
                    onClick={()=>handleClick(index)}>
                        {item.label} {icon} 
                </div>
                {isExpanded&&<div className=" border-b p-5">{item.content}</div>}
            </div>
        )
    })



    return ( <div className="  border-x border-t rounded-md  overflow-hidden min-w-full">
        {renderedItems}
    </div> );
}
 
export default Accordion;