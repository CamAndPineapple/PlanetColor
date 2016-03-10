import React from 'react';
import {Component} from 'react';
import SearchBar from './search-bar';
import ColorOutput from './color-output';

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div className="header">
          <h1>Planet
            <span className="red">C</span>
            <span className="orange">o</span>
            <span className="yellow">l</span>
            <span className="green">o</span>
            <span className="blue">r</span>
            <span className="purple">s</span>
          </h1>
        </div>
        <div className="container">
          <SearchBar/>
        </div>
      </div>
    );
  }
}
