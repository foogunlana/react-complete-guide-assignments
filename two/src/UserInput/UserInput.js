import React from 'react';
import './UserInput.css';

const userInput = (props) => {
  return (
    <div>
      <input onChange={props.changed} value={props.text} className="UserInput" type="text"/>
      <p>Length of input: {props.inputLength}</p>
    </div>
  );
}

export default userInput;