import React from "react";
import { callbacks } from "./App";

const Item = ({item})=>{
    const {id,name,checked} = item
    console.log(`=> Item:  ${checked?'*':'-'} #${id} ${name}`)

    return (
        <div 
        className='item' 
        onClick={()=>callbacks.onItemClick(id)}>
            <span className={'select'+(checked?' checked':'')}></span>
            <span>#{id}</span>
            <span>{name}</span>
        </div>
    )
}

// https://reactjs.org/docs/react-api.html#reactmemo
function areEqual(prevProps, nextProps) {
    /*
    return true if passing nextProps to render would return
    the same result as passing prevProps to render,
    otherwise return false
    */
   return prevProps.item===nextProps.item
}

// export default React.memo(Item,areEqual)
// Reacr.memo() guide: https://dmitripavlutin.com/use-react-memo-wisely/

// !!! areEqual doesn't work here - old callback => old list used !!!

export default React.memo(Item)
