import React from 'react';
import './Char.css'

const character = (props) => {
  return (<div onClick={props.click} className="Char">{props.character}</div>);
}

export default character;