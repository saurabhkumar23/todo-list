import React,{useState} from 'react'
import {todoContext} from './Main'

const Input = () => {

    const todocontext = React.useContext(todoContext)
    const {dispatch} = todocontext
    const [todo, setTodo] = useState('')

    const itemAddHandler = () => {
        if(todo && todo.trim() !== ''){
            dispatch({type : 'ADD_TODO','item' : todo})
        }
        setTodo('')
    }

    return (
        <div className='input-container'>
            <input value={todo} onChange={ (e) => setTodo(e.target.value)}  placeholder='Task'/>
            <button onClick={itemAddHandler}>ADD</button>
        </div>
    )
}

export default Input
