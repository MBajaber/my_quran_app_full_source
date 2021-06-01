import React from 'react';
import { BiDownload } from 'react-icons/bi';
import { connect } from 'react-redux';
import { downloadFuc } from '../repeatFunc';

const downloadBtn = props => (
    <button className='btn' onClick={() => downloadFuc(props.url, props.suraName)} title={props.site_language && props.site_language.download}>
        <BiDownload size={props.size} />
    </button>
);

const mapStateToProps = state => ({
    site_language: state.lang.site_language
});

export default connect(mapStateToProps)(downloadBtn);