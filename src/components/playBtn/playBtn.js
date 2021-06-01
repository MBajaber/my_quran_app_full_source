import React, { useState, useEffect } from 'react';
import { BiPlay,BiPause } from 'react-icons/bi';
import './playBtn.css';
import { connect } from 'react-redux';

const PlayBox = props => {

    const setLink = useState(false)[1];

    useEffect(() => {
        setLink(props.linkState);
    }, [props.linkState]);

    const classes = ['play-btn', props.classes];
    return (
        <button className={classes.join(' ')} title={props.language.lang === 'ar' ? 'تشغيل' : 'play'} onClick={props.clicked}>
            {props.linkState ? <BiPause  size={props.size} color={props.color}/> : <BiPlay size={props.size} color={props.color} />}
        </button>
    )
};

const mapStateToProps = state => ({
    language: state.lang.language
});

export default connect(mapStateToProps)(PlayBox);