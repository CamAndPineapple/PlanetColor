import React, {Component} from 'react';

export default(props) => {
  return (
    <div className="color-output" style={{
      backgroundColor: props.color
    }}><div className="shadow"></div></div>
  );
}
