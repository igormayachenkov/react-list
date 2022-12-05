import React from "react";

export default ({item, onItemClick})=>{
        const {id,name,checked} = item
        console.log(`=> Item:  ${checked?'*':'-'} #${id} ${name}`)

        return (
            <div 
            className='item' 
            onClick={()=>onItemClick(id)}>
                <span className={'select'+(checked?' checked':'')}></span>
                <span>#{id}</span>
                <span>{name}</span>
            </div>
        )
    }
