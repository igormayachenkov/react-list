import React from "react";

const Item = ({item, onItemClick})=>{
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

export default React.memo(Item)
