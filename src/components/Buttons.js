import React from 'react';
import Audio from './Audio';
import getIdString from './getIdString';

const Buttons = props => {
    return ( 
        <button id={getIdString(props.url)} onClick={props.handleClick}>
            <Audio url={props.url} alpha={props.alpha}/>
            {props.alpha.toUpperCase()}
        </button>
);
}

export default Buttons;