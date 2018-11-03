import React from 'react';
import Buttons from './Buttons';
import './styles/pads.css';

const Pads = props => {
const keys = Object.keys(props.keys).slice();
const sounds = Object.values(props.keys).slice();

const buttons = keys.map((val, i) => 
            <Buttons alpha={val} key={val} handleClick={props.handleClick} url={sounds[i]}/>
                
        );
    return (
        <div className="pads" id="pads">
            {buttons}
        </div>
        );
};

export default Pads;
