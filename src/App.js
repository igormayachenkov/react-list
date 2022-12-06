import {useState} from "react";
import './App.css';
import Header from './Header'
import List from './List'

const App = ()=>{
  console.log(`=> ----------- App ------------`)
  return (
    <div className="App">

      <Header/>

      <List/>

    </div>
  );
}

export default App;
