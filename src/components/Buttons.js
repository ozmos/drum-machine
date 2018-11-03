import React from 'react';
import Audio from './Audio';
import getIdString from './getIdString';
import './styles/buttons.css'

const Buttons = props => {
    return ( 
        <button className={['button', 'button' + props.alpha].join(' ')} id={getIdString(props.url)} onClick={props.handleClick}>
            <Audio url={props.url} alpha={props.alpha}/>
            {props.alpha.toUpperCase()}
        </button>
);
}

export default Buttons;
