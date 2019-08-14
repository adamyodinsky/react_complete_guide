import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Adam', age: 31 },
      { name: 'Tali', age: 33 },
      { name: 'Dani', age: 37 }
    ]
  }


  switchPersonHandler = () => {
    this.setState({
      persons: [
        { name: 'Adam', age: 32 },
        { name: 'Tali', age: 34 },
        { name: 'Dani', age: 38 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 32 },
        { name: event.target.value, age: 34 },
        { name: 'Dani', age: 38 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi i'm a React App</h1>
        <Person {...this.state.persons[0]} click={this.nameChangedHandler}
          changed={this.nameChangedHandler} />
        <Person {...this.state.persons[1]} click={this.nameChangedHandler}
          changed={this.nameChangedHandler} />
        <Person {...this.state.persons[2]} click={this.nameChangedHandler}
          changed={this.nameChangedHandler} />
        <button onClick={this.switchPersonHandler}>Switch Name</button>
      </div>
    );

  }
}

export default App;
