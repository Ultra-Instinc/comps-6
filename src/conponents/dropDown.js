import Panel from "./panel";
import { AiFillCaretDown } from "react-icons/ai";
import { useState , useEffect , useRef } from "react";
// import { classname } from 'classnames';

const DropDown = ({options,onChange,value}) => {
    const divEL=useRef()   // creating a ref // then pass it as porp 'ref'
    useEffect(()=>{
        const handler=(event)=>{
            if(!divEL.current){
                return
            }
            if(!divEL.current.contains(event.target)){
                setIsOpen(false)
            }
        }

        document.addEventListener('click',handler,false)
        
        return ()=>{
        document.removeEventListener('click',handler)
        }
    },[])

    const [isOpen,setIsOpen]=useState(false)

    const handleClick=()=>{
        setIsOpen(!isOpen)
    }
    const handleClickOption=(option)=>{
        setIsOpen(false)
        onChange(option)
    }
 
    const renderedOptions=options.map((option)=>{
        return <div 
        className='hover:bg-sky-100 hover:scale-105 duration-500 rounded cursor-pointer p-1'
        key={option.id} 
        onClick={()=>handleClickOption(option)} >
            {option.label}
        </div>
    })


    //1 equivelant>>>>>>>>>>>
    // let content = 'Select...'
    // if(value){
    //     content= value.label
    // }
    //2 eqivelant>>>>>>>>>>>>>
    //let content=value
    //?value.label
    //:'Select'
    //3 equivelant>>>>>>>>>>>>>
    //value?.label||'Select...'  // check if value is defined >> gives us back value.label
    //                              // if value is undefined >>>>>> gives us 'Select...'

    let displayIcon=isOpen?<AiFillCaretDown size={20} className=" duration-500"/>:<AiFillCaretDown size={20} className="rotate-90 duration-500"/>

    return ( 
    <div ref={divEL} className="w-48 relative">
        <Panel className=" text-blue-500 flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full" 
            onClick={handleClick}>
                {value?.label||'Select......'} 
                {displayIcon} 
        </Panel >
        <div className="text-green-500 overflow-hidden">
                    {isOpen&&<Panel className="absolute top-full ">{renderedOptions}</Panel>} 

        </div>
    </div> 
    );
}
 
export default DropDown;