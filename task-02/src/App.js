import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation'
import UserInput from './UserInput/UserInput'

class App extends React.Component {
  state = {
    str: ""
  }

  handleStrChange = (event) => {
    this.setState(
      {str: event.target.value}
    )
  }

  render() {
    return (
      <div className="App">
        <p>Hello</p>
        <UserInput
          change={(event) => this.handleStrChange(event)}
        />
        <Validation str={this.state.str} />
      </div>
    )
  }
}

export default App;
