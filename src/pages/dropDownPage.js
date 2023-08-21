import { useState } from "react";
import DropDown from "../conponents/dropDown";

const DropDownPage = () => {
    const options=[
        {
            id:'dskjfgddgsdhkf',label:'Red',  value:'red'
        },
        {
            id:'dskjfgddfgddsf',label:'Green',value:'green'
        },
        {
            id:'dskjfgwdfsfddf',label:'Blue', value:'blue'
        },
    ]

    const [selection,setSelection]=useState(null)
    const handleSelect=(option)=>{
        setSelection(option)
    }

    return ( 
    <div className="flex"> 

        <DropDown value={selection} onChange={handleSelect} options={options} /> 
    </div>)
}
 
export default DropDownPage;
 