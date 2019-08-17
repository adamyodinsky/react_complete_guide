import React, { Component } from 'react';
import './App.css';
import UserInput from './userInput/userInput'
import UserOutput from './userOutput/userOutput'
// import logo from './logo.svg';


class App extends Component {

  state = {
    userName: 'adam'
  }

  changeNameHandler = (event) => {
    this.setState({ userName: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi i'm Task-01 App!</h1>
        <h3>User Input:</h3>
        <UserInput click={this.changeNameHandler} />
        <h3>User Output:</h3>
        <UserOutput {...this.state} />
        <UserOutput {...this.state} />
      </div>
    );
  }
}

export default App;
