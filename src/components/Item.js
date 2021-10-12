import React from 'react'
import {todoContext} from './Main'

const Item = (props) => {

    const todocontext = React.useContext(todoContext)
    const {dispatch} = todocontext
    const {item,id} = props

    const deleteItem = (id) => {
        dispatch({type:'DEL_TODO',id})
    }

    return (
        <div className='item'>
            <h1>{item}</h1>
            <button onClick={() => deleteItem(id)}>x</button>
        </div>
    )
}

export default Item
