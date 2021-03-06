import React, {Component} from 'react';


export default props => {
  // set div's background color via its props
  // and add bottom shadow to planet to make it appear floating
  return (
    <div className="color-output" style={{
      backgroundColor: props.color
    }}>
    <h1>{props.color}</h1>
      <div className="shadow"></div>
    </div>
  );
}
