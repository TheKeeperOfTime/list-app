import React, { Component } from 'react';
import './App.css';

class Student extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <img src={this.props.image} />
        <h3>{this.props.grade}</h3>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Student name='Spencer' image='https://avatars0.githubusercontent.com/u/20505107?v=3&s=100' grade='4.0' />
        <Student name='Sydney' image='https://avatars0.githubusercontent.com/u/20505120?v=3&s=100' grade='4.0' />
        
      </div>
    );
  }
}

export default App;