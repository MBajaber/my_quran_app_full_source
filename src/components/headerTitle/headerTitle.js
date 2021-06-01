import React from 'react';
import { connect } from 'react-redux';
import AyatWhite from './ayatWhite.png';
import { HeaderTitleStyled } from './headerTitleStyled';
import { GiBookmarklet  } from 'react-icons/gi';

const headerTitle = props => (
    <HeaderTitleStyled theme={props.theme} themeStyle={props.themeStyle}>
        <div className='content d-flex align-items-center justify-content-center justify-content-sm-between flex-wrap'>
            <div className='book_logo'>
                <GiBookmarklet size={120} />
            </div>
            <div className='text-image'>
                <img src={AyatWhite} className='img-responsive' alt='header' />
            </div>
        </div>
    </HeaderTitleStyled>
);

const mapStateToProps = state => ({
    theme: state.theme.theme,
    themeStyle: state.theme.themeStyle
});

export default connect(mapStateToProps)(headerTitle);