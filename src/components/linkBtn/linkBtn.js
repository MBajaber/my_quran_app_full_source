import React from 'react';
import { BsLink45Deg } from 'react-icons/bs';
import { connect } from 'react-redux';

const LinkBtn = props => (
    <button className='btn' title={props.language.lang === 'ar' ? 'نسخ الرابط' : 'copy link'}>
        <BsLink45Deg size={24} />
    </button>
);

const mapStateToProps = state => ({
    language: state.lang.language
});
export default connect(mapStateToProps)(LinkBtn);
