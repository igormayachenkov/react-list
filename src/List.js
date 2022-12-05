import React from "react";
import Item from "./Item"

const columns = {
    checked :{name:"Ch",    compare:(a,b)=>a.checked-b.checked},
    id      :{name:"ID",    compare:(a,b)=>a.id-b.id},
    name    :{name:"Name",  compare:(a,b)=>a.name.localeCompare(b.name)},
}

export default class List extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          sortby : "id"
        }
    }

    setSortBy(value){
        const {sortby} = this.state
        console.log(`List.setSortBy ${sortby}->${value}`)
        if(value!=sortby)
            this.setState({sortby:value})
    }
    
    render(){
        const {sortby} = this.state
        const {list,onItemClick} = this.props
        console.log(`=> List, sortby:${sortby}`)

        return (
            <div className='list'>
                <div className="header">
                    {Object.entries(columns).map(([key,value])=>(
                        <span 
                            key={key}
                            className={"col"+(sortby==key?' active':'')} 
                            onClick={()=>this.setSortBy(key)}>{value.name}</span>
                    ))}
                </div>
                {list
                    .sort(columns[sortby].compare)
                    .map((item)=>(
                    <Item 
                        key  = {item.id} 
                        item = {item}
                        onItemClick={onItemClick}/>
                ))}
            </div>
        )
    }
}