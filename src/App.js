import React, { Component } from 'react';
import './App.css';
import Pads from './components/Pads';
import { connect } from 'react-redux';
import Display from './components/Display';
import keyDisplay from './components/KeyDisplay';
import getIdString from './components/getIdString';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.playClip = this.playClip.bind(this);
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress, false);
  }

  handleClick(event) {
    this.playClip(event.target.firstChild.id);
    this.props.upDateDisplay(event.target.id);
  }

  handleKeyPress(event) {
    if (event.key === ' ') {
      this.playClip('Spacebar');
      this.props.upDateDisplay(getIdString(keyDisplay['Spacebar']));
    } else if (document.getElementById(event.key)){
    this.playClip(event.key);
    this.props.upDateDisplay(getIdString(keyDisplay[event.key]));
    } else return;
  }  
  playClip(id) {
      document.getElementById(id).play();
  }
  render() {
    const keys = keyDisplay;
    return (
      <div id="drum-machine" style={{ border: "1px solid blue", height: 500, width: 500, textAlign: 'center' }}>
        <h1>React Drum Machine</h1>
        <span>boom bap pow</span>
        <Pads keys={keys} handleClick={this.handleClick} />
        <Display display={this.props.display} />
      </div>

    );
  }
}

const mapStateToProps = state => {
    return {
        display: state.display
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
            upDateDisplay: (display) => dispatch({type: 'UPDATE', display: display})
        };
  };

const Container = connect(mapStateToProps, mapDispatchToProps)(App);
export default Container; 
