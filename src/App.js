import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pads from './Pads';
class App extends Component {
  render() {
    const keys = ['a', 's', 'd', 'f', 'j', 'k', 'l', ';', ' '];

    return (
          <div id="drum-machine" style={{border: "1px solid blue", height: 500, width: 500, textAlign: 'center'}}>
            <h1>React Drum Machine</h1>
            <span>boom bap pow</span>
            <Pads keys={keys}/>
          </div>

          );
  }
}

export default App;
