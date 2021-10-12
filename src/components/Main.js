import React,{useReducer} from 'react'
import Input from './Input'
import Item from './Item'

export const todoContext = React.createContext()

function reducer(state,action){
    switch(action.type){
        case 'ADD_TODO' : return [...state,action.item];
        case 'DEL_TODO' : return state.filter((item,index) => {
                            return action.id !== index
                        });
        default : return state;                
    }
}

const Main = () => {

    const [todos,dispatch] = useReducer(reducer,[])

    return (
        <todoContext.Provider value={{todos,dispatch}}>
            <div className='app-container'>
                <h1 className='heading'>TODOs</h1>
                <Input/>
                <div className='lists-container'>
                    {
                        todos.map((item,index) => <Item key={index} id={index} item={item}/>)
                    }
                </div>
            </div>
        </todoContext.Provider>
    )
}

export default Main
