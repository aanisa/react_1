import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Enter',
  lastName: 'Name'
};

const greeting = (
  <div>
  <h1> Hey there {formatName(user)}! </h1>
  <h2> The Time is {new Date().toLocaleTimeString()}.</h2>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React App</h2>
        </div>
        <p className="App-intro">
            All the things will be added here
        </p>
        <p> {greeting} </p>
      </div>
    );
  }
}

export default App;
