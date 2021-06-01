import React from 'react';
import './asideLink.css';
import { NavLink } from 'react-router-dom';
import { AsideLink } from './asideLinkStyled';
import { connect } from 'react-redux';

const asideList = props => {
    return (
        <li className='aside-list'>
            <AsideLink site_lang={props.language.lang} themeStyle={props.themeStyle} theme={props.theme}>
                <NavLink to={props.link} exact={props.exact} >
                    <span className='aside-list-logo'>
                        {props.children}
                    </span>
                    <span className='aside-list-text text-capitalize'>{props.text}</span>
                </NavLink>
            </AsideLink>
        </li>
    )
}

const mapStateToProps = state => ({
    theme: state.theme.theme,
    themeStyle: state.theme.themeStyle,
    language: state.lang.language
});

export default connect(mapStateToProps)(asideList);