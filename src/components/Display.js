import React from 'react';
import './styles/display.css';

const Display = props => {
    return (
        <div id="display" className="display">
            <span>{props.display}</span>
            <h3>{
                props.title ? props.title : 'Boom bap pow'}
            </h3>
            <button className='toggle_button' onClick={props.kitCycle} >change kit</button>
        </div>
        );
};

export default Display;
