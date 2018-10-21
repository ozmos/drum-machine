import React, { Component } from 'react';
import './App.css';
import Pads from './components/Pads';
class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress, false);
  }

  handleClick(event) {
    console.log(event.target.firstChild);
    event.target.firstChild.play();
  }

  handleKeyPress(event) {
    if (event.key === ' ') {
      document.getElementById('Spacebar').play();
    } else if (document.getElementById(event.key)){
    document.getElementById(event.key).play();
    } else return;
  }  

  render() {
    const keys = ['w', 'e', 'r', 'u', 'i', 'a', 's', 'd', 'f', 'j', 'k', 'l', ';', 'Spacebar'];

    return (
      <div id="drum-machine" style={{ border: "1px solid blue", height: 500, width: 500, textAlign: 'center' }}>
        <h1>React Drum Machine</h1>
        <span>boom bap pow</span>
        <Pads keys={keys} handleClick={this.handleClick} />
      </div>

    );
  }
}

export default App;
