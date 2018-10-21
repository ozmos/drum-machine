import React from 'react';
import sounds from './sounds';
import Buttons from './Buttons';

const Pads = props => {
    
const buttons = props.keys.map((val, i) => 
            <Buttons alpha={val} key={val} handleClick={props.handleClick} url={sounds[i]}/>
                
        );
    return (
        <div id="pads" style={{border: "1px dashed orange"}}>
            {buttons}
        </div>
        );
};

export default Pads;
