import React from "react";
import logo from './logo.svg';

export default ({title})=>{
        console.log(`=> Header:  ${title}`)

        return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
  
            <span>{title}</span>
  
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
        </header>
        )
    }
