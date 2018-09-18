import React from 'react';

const UserOutput = (props) => {
  const style = {
    padding: '15px',
    border: '1px solid #ccc',
    boxShadow: '2px 2px 3px #eee',
    margin: '5px',
    display: 'inline-block'
  };
  
  return (
    <div>
      <div style={style}>
        <p>{props.username}</p>
        <p>Second Par!</p>
      </div>
    </div>
  );
}

export default UserOutput;