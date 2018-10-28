import React from 'react';
import Audio from './Audio';
import getIdString from './getIdString';

const style = {
    width: 70
};

const Buttons = props => {
    return ( 
        <button id={getIdString(props.url)} onClick={props.handleClick} style={style}>
            <Audio url={props.url} alpha={props.alpha}/>
            {props.alpha.toUpperCase()}
        </button>
);
}

export default Buttons;
