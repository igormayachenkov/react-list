import React,{useContext} from "react";
import logo from './logo.svg';
import HeaderContext from "./HeaderContext";

const Header = ()=>{
        const {title} = useContext(HeaderContext)
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
export default React.memo(Header) 
// Reacr.memo() guide: https://dmitripavlutin.com/use-react-memo-wisely/

