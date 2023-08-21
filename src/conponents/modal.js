import  ReactDOM  from 'react-dom';
import { useEffect } from 'react';
// to add the Modal and not be influenced by any parent who could have a display other than static
// so we have to use a portal to create the modal as the body of the html his direct parent    (  ReactDOM.createPortal( the modal , the elment in the html)    )
// import Button from'../conponents/button'
const Modal = ({onClose,children,actionBar}) => {
    useEffect(()=>{
        document.body.classList.add('overflow-hidden')  //add a styling to the body when component renders

        return ()=>{
            document.body.classList.remove('overflow-hidden')// remove the styling we added to the
        }
    },[])
    return ReactDOM.createPortal(
        <div>
            {/* first div will function as our gray back grounjd */}
            <div onClick={onClose} className="fixed inset-0 bg-gray-400 opacity-80">
                
            </div>
            {/* second div represents the window in the middle of the screen with the white background  */}
            <div className="fixed inset-40 p-10 bg-white hover:bg-teal-900 rounded-lg hover:scale-105 duration-500">
                <div className='flex flex-col justify-between h-full'>
                    {children}
                    <div className='flex justify-end'>
                        {actionBar}
                    </div>
                </div>
                
            </div>
        
        </div>,
        document.querySelector('.modal-container')

    )
    
}
 
export default Modal;