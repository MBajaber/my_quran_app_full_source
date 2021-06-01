import React from 'react';
import { connect } from 'react-redux';
import { LetterSectionStyled } from './letterStyled'

const letterSection = props => (
    <LetterSectionStyled className="fancy-button letter-section bg-gradient2" themeStyle={props.themeStyle}>
        <span>{props.letter}</span>
    </LetterSectionStyled>
);

const mapStateToProps = state => ({
    themeStyle: state.theme.themeStyle
});

export default connect(mapStateToProps)(letterSection);
