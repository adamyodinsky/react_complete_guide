import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation';
import UserInput from './UserInput/UserInput';
import CharComponent from './CharComponent/CharComponent';
import StringComponent from './StringComponent/StringComponent'

class App extends React.Component {
  state = {
    str: ""
  }

  StrChangeHandler = (event) => {
    this.setState(
      {str: event.target.value}
    )
  }

  DeleteCharHanlder = (index) => {
    let newStrArr = this.state.str.split(''); 
    newStrArr.splice(index, 1);
    let newStr = newStrArr.join('');
    this.setState({str: newStr});
  }

  render() {

    let CharsList = this.state.str.split('').map((ch, index) => {
        return <CharComponent
            char={ch}
            click={()=> this.DeleteCharHanlder(index)}
          />
        })

    
    return (
      <div className="App">
        <p>Hello</p>
        <UserInput
          change={(event) => this.StrChangeHandler(event)}
        />
        <Validation str={this.state.str} />
        <p>Chars:</p>
        {CharsList}
        <p>String:</p>
        <StringComponent str={this.state.str} />
      </div>
    )
  }
}

export default App;
