import React from 'react';
import sounds from './sounds';
import Buttons from './Buttons';


const Pads = props => {
const keys = Object.keys(props.keys);
const sounds = Object.values(props.keys);

const buttons = keys.map((val, i) => 
            <Buttons alpha={val} key={val} handleClick={props.handleClick} url={sounds[i]}/>
                
        );
    return (
        <div id="pads" style={{border: "1px dashed orange"}}>
            {buttons}
        </div>
        );
};

export default Pads;
