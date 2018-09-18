import React from 'react';
import './UserInput.css'


const userInput = (props) => {
  return (
    <div className="UserInput">
      <input 
        onChange={props.changedUsername}
        type="text"
        value={props.children}/>
    </div>
  );
}


export default userInput;