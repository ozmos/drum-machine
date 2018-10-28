import React from 'react';
import Buttons from './Buttons';

const style = {
    display: 'flex',
    flexFlow: 'row wrap',
    border: '2px dashed green',
    padding: 15
}

const Pads = props => {
const keys = Object.keys(props.keys).slice(1);
const sounds = Object.values(props.keys).slice(1);

const buttons = keys.map((val, i) => 
            <Buttons alpha={val} key={val} handleClick={props.handleClick} url={sounds[i]}/>
                
        );
    return (
        <div id="pads" style={style}>
            {buttons}
        </div>
        );
};

export default Pads;
