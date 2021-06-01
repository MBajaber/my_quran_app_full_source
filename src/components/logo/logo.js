import React from 'react';
import './logo.css';
import { GiBookmarklet  } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const logo = props => (
    <NavLink to='/' className='logo d-flex justify-content-between'>
        <GiBookmarklet size={35} />
        <span>{props.site_language && props.site_language.my_quran}</span>
    </NavLink>
);

const mapStateToProps = state => ({
    theme: state.theme.theme,
    site_language: state.lang.site_language
});

export default connect(mapStateToProps)(logo);