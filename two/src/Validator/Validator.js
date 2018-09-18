import React from 'react';

const validator = (props) => {
  let response = "";
  if (props.inputLength === 0) {
    response = "Please enter some text!";  
  } else if (props.inputLength > props.max) {
    response = "Too much text!";
  } else if (props.inputLength < props.min) {
    response = "Too little text!";
  } else {
    response = "Text is just right!";
  }

  return (<p>{response}</p>);
}

export default validator;
