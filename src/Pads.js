import React from 'react';

const Keys = props => {
    //to do
};

const Pads = props => {
    
    return (
        <div id="pads" style={{border: "1px dashed orange"}}>
            <Keys keys={props.keys} />
        </div>
        );
};

export default Pads;
