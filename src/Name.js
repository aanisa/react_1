import React;
import ReactDOM;
import logo from './logo.svg';
import './App.css';


function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Raging',
  lastName: 'River'
};

const element = (
  <h1> Hey there {formatName(user)}! </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

// Goal: Data bound input field, will display entered name into DOM
