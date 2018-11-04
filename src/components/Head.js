import React from 'react';
import './styles/head.css';

const Head = props => {
    return (
    <div className='head'>
        <h1 className='title'>{props.title}</h1>
        <h2 className='subtitle'>{props.subtitle}</h2>
    </div>
      );
};

export default Head;


