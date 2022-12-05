import React from 'react';
import './App.css';
import Header from './Header'
import List from './List'
import DataContext from './DataContext';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title : "Classic Context",
      list  : [
        {id:1, name:'one',  checked:false},
        {id:2, name:'two',  checked:false},
        {id:3, name:'three',checked:false},
        {id:4, name:'four', checked:false},
        {id:5, name:'five', checked:false}
      ],
      onItemClick : this.onItemClick.bind(this)
    }
  }

  onItemClick(id){
    console.log(`onItemClick #${id}`)
    // Toggle item checked
    let newList = this.state.list.map(
      (item) => (item.id === id) ? {...item, checked:!item.checked} : item
    )
    this.setState({list:newList});
  }

  render(){
    console.log(`=> ----------- App ------------`)
    return (
      <div className="App">
        <DataContext.Provider value={this.state}>

          <Header />

          <List />

        </DataContext.Provider>
      </div>
    );
  }
}

export default App;
