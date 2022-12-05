import React from "react";

export default class Item extends React.PureComponent {
    render(){
        const {onItemClick} = this.props
        const {id,name,checked} = this.props.item
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
}