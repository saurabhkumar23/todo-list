import React from 'react'

const Input = (props) => {

    const {item,setItem,list,setList} = props

    const itemAddHandler = () => {
        if(item && item.trim() !== ''){
            setList([...list,item])
        }
        setItem('')
    }

    return (
        <div className='input-container'>
            <input value={item} onChange={ (e) => setItem(e.target.value)}/>
            <button onClick={itemAddHandler}>+</button>
        </div>
    )
}

export default Input
