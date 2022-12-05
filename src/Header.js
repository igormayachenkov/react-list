import React from "react";
import logo from './logo.svg';
import DataContext from "./DataContext";

export default class Header extends React.PureComponent {
  static contextType = DataContext

  render(){
      const {title} = this.context
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
}