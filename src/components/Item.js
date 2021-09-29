import React from 'react'

const Item = (props) => {

    const {item,list,setList,id} = props

    const deleteItem = (id) => {
        let updatedList = list.filter((item,index) => {
            return id !== index
        })
        console.log(updatedList)
        setList(updatedList)
    }

    return (
        <div className='item'>
            <h1>{item}</h1>
            <button onClick={() => deleteItem(id)}>delete</button>
        </div>
    )
}

export default Item
