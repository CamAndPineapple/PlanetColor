import React, {Component} from 'react';

export default(props) => {
  return (
    // set div's background color via its props
    <div className="color-output" style={{
      backgroundColor: props.color
    }}>
      // Add bottom shadow to planet to make it appear floating
      <div className="shadow"></div>
    </div>
  );
}
