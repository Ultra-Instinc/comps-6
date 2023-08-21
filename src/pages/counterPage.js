import { produce } from 'immer';
import { useReducer } from 'react';
import Button from '../conponents/button'
import Panel from '../conponents/panel';

const CounterPage = ({initialCount}) => {
 
    const INCREMENT_COUNT='increment'
    const DECREMENT_COUNT='decrement'
    const SET_VALUE_TO_ADD='set-value-to-add'
    const ADD_VALUE_TO_COUNT='add-it'
  

    const reducer=(state,action)=>{

        switch (action.type){
            case ADD_VALUE_TO_COUNT:
                state.count=state.count+state.valueToAdd
                state.valueToAdd=0
                return
            case DECREMENT_COUNT:
                state.count=state.count-1 
                return
            case INCREMENT_COUNT:
                state.count=state.count+1
                return
            case SET_VALUE_TO_ADD:
                state.valueToAdd=action.payload
                return
            default:
                // throw new Error('Unexpected action type : '+ action.type)
                return state
            }



        // if(action.type===INCREMENT_COUNT){
        //     return {
        //         ...state,
        //         count:state.count+1
        //     }
        // }
        // if(action.type===SET_VALUE_TO_ADD){
        //     return {
        //         ...state,
        //         valueToAdd:action.payload
        //     }
        // }
        // return state
    }


    const [state,dispatch] = useReducer(produce(reducer),{
        count:initialCount,
        valueToAdd:0
    })

    const increment=()=>{
        dispatch({
            type:INCREMENT_COUNT
        })
    }
    const decrement=()=>{
        dispatch({
            type:DECREMENT_COUNT
        })
    }
    const handleChange=(event)=>{
         const value= parseInt(event.target.value)||0
        
        dispatch({
            type:SET_VALUE_TO_ADD, 
            payload:value
        })
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        dispatch({
            type:ADD_VALUE_TO_COUNT,
        })
        // setValueToAdd(0)
    }

    return ( <Panel className='m-3'>
        <h1 className='text-lg'>Count is {state.count} </h1>
        <div className='flex flex-row'>
            <Button primary onClick={increment}>Increment..</Button>
            <Button primary onClick={decrement}>Decrement</Button>
        </div>
        <form onSubmit={handleSubmit} action="">
            <label htmlFor="">Add a lot!</label>
            <input
                value={state.valueToAdd||''}
                onChange={handleChange} 
                type="number" 
                className='p-1 m-3 bg-gray-50 border border-gray-300'/>
            <Button success>Add it!</Button>
        </form>
    </Panel> );
}

export default CounterPage;