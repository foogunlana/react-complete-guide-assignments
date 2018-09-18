import React, { Component } from 'react';
import uuid from 'uuid4';
import './App.css';
import UserInput from './UserInput/UserInput';
import Validator from './Validator/Validator';
import Char from './Char/Char';

class App extends Component {
  state = {
    textInput: "",
  }
  
  changedInput = (event) => {
    this.setState({
      textInput: event.target.value
    });
  }
  
  characterDeleteHandler = (event, index) => {
    const characters = this.state.textInput.split('');
    characters.splice(index, 1);
    this.setState({
      textInput: characters.join('')
    });
  }
  
  render() {
    const characters = this.state.textInput.split('').map((c, i) => {
      if (c === ' ') {
        c = "--";
      }
      return <Char 
        click={(e) => this.characterDeleteHandler(e, i)}
        character={c} key={i}/>
    });
    
    return (
      <div className="App">
        <Validator
          min={10}
          max={30}
          inputLength={this.state.textInput.length} />
        <UserInput
          inputLength={this.state.textInput.length}
          text={this.state.textInput}
          changed={(e) => this.changedInput(e)} />
        {characters}
      </div>
    );
  }
}

export default App;
