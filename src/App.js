import {useState} from "react";
import './App.css';
import Header from './Header'
import List from './List'

const App = ()=>{
  const [title, updateTitle] = useState("Functional")
  const [list, updateList]   = useState([
        {id:1, name:'one',  checked:false},
        {id:2, name:'two',  checked:false},
        {id:3, name:'three',checked:false},
        {id:4, name:'four', checked:false},
        {id:5, name:'five', checked:false}])

  const onItemClick = (id)=>{
    console.log(`onItemClick #${id}`)
    // Toggle item checked
    let newList = list.map(
      (item) => (item.id === id) ? {...item, checked:!item.checked} : item
    )
    updateList(newList)
  }

  console.log(`=> ----------- App ------------`)
  return (
    <div className="App">

      <Header title={title}/>

      <List 
        list={list}
        onItemClick={(id)=>onItemClick(id)}/>

    </div>
  );
}

export default App;
