import React from 'react';

const thumb = (props) => (    
    <li className='Photo' onClick={props.clicked}>
        <img alt={props.title} src={props.url} />
        <p>{props.title}</p>
    </li>
);

export default thumb;