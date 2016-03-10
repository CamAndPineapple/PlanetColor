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
      <div className="container">
        <SearchBar />
      </div>

    );
  }
}
