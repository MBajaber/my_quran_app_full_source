import React from 'react';
import { LoaderStyled } from './loaderStyled';
import { connect } from 'react-redux';

const loader = props => (
    <LoaderStyled themeStyle={props.themeStyle} height={props.height} width={props.width} size={props.size}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </LoaderStyled>
);

const mapStateToProps = state => ({
    themeStyle: state.theme.themeStyle
});

export default connect(mapStateToProps)(loader);
