import React,{useState} from 'react'
import Input from './Input'
import Item from './Item'

const Main = () => {

    const [item,setItem]= useState('')
    const [list, setList] = useState([])

    return (
        <div className='app-container'>
            <Input item={item} setItem={setItem} list={list} setList={setList}/>
            <div className='lists-container'>
                {
                    list.map((item,index) => <Item key={index} id={index} item={item} setList={setList} list={list}/>)
                }
            </div>
        </div>
    )
}

export default Main
