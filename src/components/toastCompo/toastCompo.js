import React from 'react';
import { ToastCompoStyled } from './toastCompoStyled';
import { connect } from 'react-redux';

const ToastCompo = props => (
    <ToastCompoStyled site_lang={props.language.lang} myClass={props.msg.myClass} themeStyle={props.themeStyle} theme={props.theme}>
        <h6 className='toastCompo-header'>{props.msg.title}</h6>
        <p className='toastCompo-para'>{props.msg.myMsg}</p>
    </ToastCompoStyled>
);

const mapStateToProps = state => ({
    theme: state.theme.theme,
    themeStyle: state.theme.themeStyle,
    language: state.lang.language
});

export default connect(mapStateToProps)(ToastCompo);
