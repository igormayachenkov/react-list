import React from "react";
import Item from "./Item"

export default class List extends React.Component{
    render(){
        const {list,onItemClick} = this.props
        console.log(`=> List`)

        return (
            <div className='list'>
                {list.map((item)=>(
                    <Item 
                        key  = {item.id} 
                        item = {item}
                        onItemClick={onItemClick}/>
                ))}
            </div>
        )
    }
}