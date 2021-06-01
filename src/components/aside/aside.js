import React, { useState, useEffect } from 'react';
import { AiFillHome, AiFillHeart } from 'react-icons/ai';
import { FaBroadcastTower } from 'react-icons/fa';
import { AsideStyled } from './asideStyled';
import AsideLink from './asideList/asideLink';
import { connect } from 'react-redux';

const Aside = (props) => {
    const [checkPosition, setCheckPosition] = useState(false);

    const windowTop = () => {
        if(window.scrollY > 250) {
            setCheckPosition(true);
        } else {
            setCheckPosition(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', windowTop);
        return () => {
            window.removeEventListener('scroll', () => windowTop);
        }
    }, []);

    return (
        <AsideStyled theme={props.theme} themeStyle={props.themeStyle} checkPosition={checkPosition} >
            <ul className='mb-0'>
                    <AsideLink text={props.language && props.language.lang === 'ar' ? 'الرئيسية' : 'Home'} link='/' exact scrollTopScreen={props.scrollTopScreen}>
                    <AiFillHome size={20} />
                </AsideLink>
                <AsideLink text={props.site_language && props.site_language.favorite} link='/favorite'>
                    <AiFillHeart size={20} />
                </AsideLink>
                <AsideLink text={props.site_language && props.site_language.radio} link='/radios'>
                    <FaBroadcastTower size={20} />
                </AsideLink>
            </ul>
        </AsideStyled>
    )
}

const mapStateToProps = state => ({
    theme: state.theme.theme,
    themeStyle: state.theme.themeStyle,
    language: state.lang.language,
    site_language: state.lang.site_language,
});

export default connect(mapStateToProps)(Aside);