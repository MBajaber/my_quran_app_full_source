import React from 'react';
import { connect } from 'react-redux';
import { Letter } from './letterStyled';

const letter = props => (
    <Letter href={props.id} themeStyle={props.themeStyle} className="fancy-button bg-gradient1">
        <span>{props.text}</span>
    </Letter>
);

const mapStateToProps = state => ({
    themeStyle: state.theme.themeStyle
});

export default connect(mapStateToProps)(letter);