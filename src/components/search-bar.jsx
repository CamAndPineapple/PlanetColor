import React, {Component} from 'react';
import ColorOutput from './color-output';

export default class SearchBar extends Component {
  constructor(props) {
    super(props)

    // set default color
    this.state = {
      term: '',
      color: '#D21A1A'
    }

    // Take method and bind to class SearchBar, then replace method with
    // newly bound method
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);

  }

  onInputChange(e) {
    this.setState({term: e.target.value, color: e.target.value});
  }

  onSubmitForm(e) {
    e.preventDefault();
    if (this.state.term === '') {
      return;
    }
    this.setState({color: this.state.term});
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.onSubmitForm} className="form">
          <div className="form-group" id="search-container">
            <i className="fa fa-search"></i>
            <input className="form-input" id="search-input" placeholder="Search for your favorite color" onChange={this.onInputChange} value={this.state.term}/>
          </div>
        </form>
        <ColorOutput color={this.state.color}/>

      </div>

    );
  }
}
