import React from 'react';
import { connect } from 'react-redux';
import { ShikhNames } from './shikhNameStyles';
import { Link } from 'react-router-dom';

const shikhNames = props => (
    <ShikhNames className='shikh-names justify-content-between' title={props.title} theme={props.theme} themeStyle={props.themeStyle} language={props.language.lang} onClick={props.clicked}>
        <div className='text_name'>
            <Link to={`/reciter/${encodeURI((props.text)).toLowerCase()}`}>{props.text}</Link>
        </div>
        <div className='info d-flex align-items-center'>
            <div className='suras_count text-capitalize'>{props.site_language.suras}:</div>
            <div className='count'>{props.count === 114 ? props.site_language.complete_quran : props.count}</div>
        </div>
        <div className='rewaya_name mt-2'>{props.rewaya}</div>
    </ShikhNames>
);

const mapStateToProps = state => ({
    theme: state.theme.theme,
    themeStyle: state.theme.themeStyle,
    site_language: state.lang.site_language,
    language: state.lang.language
});

export default connect(mapStateToProps)(shikhNames);
