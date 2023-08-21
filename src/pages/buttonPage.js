import {GoBell , GoCloud,GoCopilot} from 'react-icons/go'
import Button from "../conponents/button";
const ButtonPage = () => {
    const handleClick=()=>{
        console.log('click')
    }
    return ( <div className='flex flex-col bg-gradient-to-r from-blue-900 to-slate-900'>
        <div><Button primary hover rounded shadow  onClick={handleClick} > <GoBell/> Order Now!</Button></div>
        <div><Button secondary hover rounded shadow  ><GoCloud/> View Cart!</Button></div>
        <div><Button success hover rounded shadow > <GoCopilot/>Discounts!</Button></div>
        <div ><Button  warning hover rounded shadow  ><GoCloud/>Refund!</Button></div>
        <div><Button danger hover shadow><GoBell/>Support!</Button></div>
    </div> );
}
 
export default ButtonPage;