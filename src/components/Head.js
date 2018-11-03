import React from 'react';
import './styles/head.css';

const Head = props => {
    return (
    <div className='head'>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
    </div>
      );
};

export default Head;


