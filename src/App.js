import React, { Component } from 'react';
import './App.css';
import Pads from './components/Pads';
import { connect } from 'react-redux';
import Display from './components/Display';
import getIdString from './components/getIdString';
import soundArray from './components/sounds/soundArray';
import Head from './components/Head';
import './vars.css';
import './resets.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.playClip = this.playClip.bind(this);
    this.nextKit = this.nextKit.bind(this);
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress, false);
  }

  nextKit() {
     this.props.kit === soundArray.length - 1 
       ? this.props.kitCycle(0)
       : this.props.kitCycle(this.props.kit + 1);
  }

  handleClick(event) {
    this.playClip(event.target.firstChild.id);
    this.props.upDateDisplay(event.target.id);
  }

  handleKeyPress(event) {
    if (document.getElementById('Spacebar') && event.key  === ' ') {
      this.playClip('Spacebar');
      this.props.upDateDisplay(getIdString(soundArray[this.props.kit].array['Spacebar']));
    } else if (document.getElementById(event.key)){
    this.playClip(event.key);
    //todo update getIdString args
    this.props.upDateDisplay(getIdString(soundArray[this.props.kit].array[event.key]));
    } else return;
  }  
  playClip(id) {
      document.getElementById(id).play();
  }
  render() {
    const keys = soundArray[this.props.kit].array;
    const appClass = soundArray.map((obj, i) => 'App_'+ i); 
    const subtitle = soundArray[this.props.kit].subtitle;
    return (
      <div className={['App', appClass[this.props.kit]].join(' ')} id="drum-machine">
        <div className='container'>
            <Head title='React-Redux Drum Machine' subtitle={subtitle}/>
            <Pads keys={keys} handleClick={this.handleClick} />
            <Display display={this.props.display} kit={this.props.kit} title={soundArray[this.props.kit]['title']} kitCycle={this.nextKit}/>
        </div>
      </div>

    );
  }
}

const mapStateToProps = state => {
    return {
        display: state.display,
        kit: state.kit
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
            upDateDisplay: (display) => dispatch({type: 'UPDATE', display: display}),
            kitCycle: (kit) => dispatch({type: 'NEXT', kit: kit})

        };
  };

const Container = connect(mapStateToProps, mapDispatchToProps)(App);
export default Container; 
