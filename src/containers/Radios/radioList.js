import React from 'react';
import PlayBtn from '../../components/playBtn/playBtn';

const radioList = props => (
    <li className={`radios_list d-flex ${props.sameLink && 'same_link'}`}>
        <PlayBtn color={props.themeStyle} size={28} clicked={() => props.clicked({url: props.url, name: props.name})} />
        <span className="name_radio" onClick={() => props.clicked({url: props.url, name: props.name})}>{props.name}</span>
    </li>
);

export default radioList;