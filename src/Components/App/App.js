import React, { Component } from 'react';
import Pets from "../Pets/Pets";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         Hotel
         <Pets/>
        </header>
      </div>
    );
  }
}

export default App;