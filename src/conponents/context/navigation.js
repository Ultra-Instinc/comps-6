import { createContext , useState , useEffect } from "react";

const NavigationContext=createContext()

function NavigationProvider({children}){

    const [currentPath,setCurrentPath]=useState(window.location.pathname)// state to use to re-render when user navigate with init-value of the current path

    useEffect(()=>{  //handle the forward-back buttons navigation
        const handler=()=>{
            setCurrentPath(window.location.pathname)
        }
        window.addEventListener('popstate',handler)

        return ()=>{
            window.removeEventListener('popstate',handler)
        }
    },[])

    const navigate=(to)=>{   //handle the link navigations
        window.history.pushState({},'',to)
        setCurrentPath(to)
    }

    return (
        <NavigationContext.Provider value={{currentPath,navigate}}>
            {children}
        </NavigationContext.Provider>
    )
}


export {NavigationProvider}
export default NavigationContext