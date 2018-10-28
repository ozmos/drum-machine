import React from 'react';

const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid red'
};

const Display = props => {
    return (
        <div id="display" style={style}>
            <span>{props.display}</span>
            <h3>{
                props.title ? props.title : 'Boom bap pow'}
            </h3>
            <button style={{width: 100}} onClick={props.kitCycle} >change kit</button>
        </div>
        );
};

export default Display;
