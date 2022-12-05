import {useContext, useState} from "react";
import Item from "./Item"
import DataContext from "./DataContext";

const columns = {
    checked :{name:"Ch",    compare:(a,b)=>a.checked-b.checked},
    id      :{name:"ID",    compare:(a,b)=>a.id-b.id},
    name    :{name:"Name",  compare:(a,b)=>a.name.localeCompare(b.name)},
}

export default ()=>{

    const {list} = useContext(DataContext)

    const [sortby, updateSortby] = useState("id")

    const setSortBy = (value)=>{
        console.log(`List.setSortBy ${sortby}->${value}`)
        if(value!=sortby)
            updateSortby(value)
    }
    
    // render(){
    console.log(`=> List, sortby:${sortby}`)

    return (
        <div className='list'>
            <div className="header">
                {Object.entries(columns).map(([key,value])=>(
                    <span 
                        key={key}
                        className={"col"+(sortby==key?' active':'')} 
                        onClick={()=>setSortBy(key)}>{value.name}</span>
                ))}
            </div>
            {list
                .sort(columns[sortby].compare)
                .map((item)=>(
                <Item 
                    key  = {item.id} 
                    item = {item}/>
            ))}
        </div>
    )
}
