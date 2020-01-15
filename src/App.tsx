import React, { Component } from 'react';
import './App.css';
import MyTest from './MyTest/MyTest';
import { Person } from './models/Person.model';

type MyState = {
  person: Person;
};

class App extends Component<any, MyState> {

  constructor(props: any) {
    super(props);
    this.state = {
      person: { firstName: 'ali', lastName: 'rezaie', age: 23 }
    };
  }


  changeState = () => {
    let person: Person = { firstName: 'ehsan', lastName: 'fazli', age: 26 };
    this.setState((prevState, props) => {
      return {
        person
      }
    })
  }

  render() {
    return (
      <div>
        <MyTest person={this.state.person}></MyTest>
      </div>
    );
  }
}

export default App;
