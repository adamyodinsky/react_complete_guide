import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: '1jd3', name: 'Adam', age: 31 },
      { id: 'd2334', name: 'Tali', age: 33 },
      { id: 'd133', name: 'Dani', age: 37 }
    ],
    showPersons: false
  }


  nameChangedHandler = (event, index) => {
    const newPersons = [...this.state.persons];
    const newPerson = { ...newPersons[index] };

    newPerson.name = event.target.value;
    newPersons[index] = newPerson;

    this.setState({ persons: newPersons });
  }



  ageChangedHandler = (event, index) => {
    const newPersons = [...this.state.persons];
    const newPerson = { ...newPersons[index] };

    newPerson.age = event.target.value;
    newPersons[index] = newPerson;

    this.setState({ persons: newPersons });
  }


  deletePersonHandler = (index) => {
    const newPersons = [...this.state.persons]
    newPersons.splice(index, 1);
    this.setState({ persons: newPersons });
  }

  togglePersonHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              key={person.id}
              click={() => this.deletePersonHandler(index)}
              nameChanged={(event) => this.nameChangedHandler(event, index)}
              ageChanged={(event) => this.ageChangedHandler(event, index)}
            />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi i'm a React App</h1>
        <button onClick={this.togglePersonHandler}>On/Off Switch </button>
        {persons}
      </div>
    );

  }
}

export default App;
