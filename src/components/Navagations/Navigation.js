import React from 'react'
import Logo from '../logo/logo';
import Container from 'react-bootstrap/Container';
import { FaBars } from "react-icons/fa";
import { connect } from 'react-redux';
import { NavigationStyled } from './NavigationStyled';
import * as settingActions from '../../store/action/settingActions';

const Navagations = props => (
    <NavigationStyled themeStyle={props.themeStyle}>
        <div className='navgation d-flex align-items-center h-100'>
            <Container>
                <div className='content d-flex align-items-center justify-content-between'>
                    <Logo />
                    <div className='account_setting d-flex align-items-center' title={props.site_language && props.site_language.settings}>
                        <div className='setting' onClick={props.openAside}>
                            <FaBars size={30} />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    </NavigationStyled>
);

const mapStateToProps = state => ({
    themeStyle: state.theme.themeStyle,
    site_language: state.lang.site_language
});

const mapDispatchToProps = dispatch => ({
    openAside: () => dispatch(settingActions.openAside())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navagations);