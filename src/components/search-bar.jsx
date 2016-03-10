import React, {Component} from 'react';
import ColorOutput from './color-output';

export default class SearchBar extends Component {
  constructor(props) {
    super(props)

    // set default color to *blue*
    this.state = {
      term: '',
      color: 'blue'
    }

    // Take method and bind to class SearchBar, then replace method with
    // newly bound method
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);

  }

  onInputChange(e) {
    this.setState({term: e.target.value,
      color: e.target.value
    });
  }

  onSubmitForm(e) {
    e.preventDefault();
    if (this.state.term === '') { return; }
    this.setState({
      color: this.state.term,
      term: ''
    });
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.onSubmitForm} className="form">
          <input className="form-input" placeholder="Search for your favorite color" onChange={this.onInputChange} value={this.state.term}/>
            <button type="submit" className="form-search-button">Search</button>
        </form>
        <ColorOutput color={this.state.color}/>

      </div>

    );
  }
}
