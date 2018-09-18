import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
  state = {
    username: "foluso_ogunlana"
  }
  
  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value});
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hello! This is a React App.</h1>
        <UserInput
          changedUsername={this.usernameChangedHandler}>
          {this.state.username}
        </UserInput>
        <UserOutput
          username={this.state.username}/>
      </div>
    );
  }
}

export default App;
