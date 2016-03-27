import React, {Component} from 'react';
import ColorOutput from './color-output';

export default class SearchBar extends Component {
  constructor(props) {
    super(props)

    // set default color and search box text to empty string
    this.state = {
      color: '#D21A1A'
    }

  }

  onInputChange(e) {

    // Update state as you type in the search box
    this.setState({
      color: e.target.value
    });
  }

  // Could update color via form submit if you wanted to
  onSubmitForm(e) {
    e.preventDefault();

    // If search box is empty, don't update color
    if (this.state.color === '') {
      return;
    }
    // Update this.state.color to text in search box
    this.setState({color: this.state.color});
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.onSubmitForm.bind(this)} className="form">
          <div className="form-group" id="search-container">
            <i className="fa fa-search"></i>
            <input className="form-input" id="search-input"
              onChange={this.onInputChange.bind(this)}
              placeholder="Search for your favorite color"
              value={this.state.color}/>
          </div>
        </form>
        <ColorOutput color={this.state.color}/>
      </div>
    );
  }
}
