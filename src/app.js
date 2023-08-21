import TablePage from "./pages/tablePage";
import ModalPage from "./pages/modalPage";
import Route from "./conponents/route";
import SideBar from "./conponents/sideBar";
import ButtonPage from "./pages/buttonPage";
import AccordionPage from "./pages/accordionPage";
import DropDownPage from "./pages/dropDownPage";
import CounterPage from "./pages/counterPage";
const App = () => {

    return ( <div className="container ml-5  grid grid-cols-6 gap-4 mt-4">
        <SideBar/>
        <div className="col-span-5  overflow-hidden">
            <Route path='/accordion' >
                <AccordionPage/>        
            </Route>
            <Route path='/dropdown' >
                <div className="">
                <DropDownPage/>         
                </div>
            </Route>
            <Route path='/buttons' >
                <ButtonPage/>         
            </Route>
            <Route path='/modal'>
                <ModalPage/>
            </Route>
            <Route path='/table'>
                <TablePage/>
            </Route>
            <Route path='/counter'>
                <CounterPage initialCount={10}/>
            </Route>
            
        </div>
        
        {/* <ButtonPage/> */}
        
    </div> );
}
 
export default App;