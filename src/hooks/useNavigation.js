import NavigationContext from "../conponents/context/navigation";
import { useContext } from "react";

function useNavigation(){
    return useContext(NavigationContext)
}

export default useNavigation