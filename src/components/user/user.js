import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { UserStyled } from './userStyled';
import { connect } from 'react-redux';

const user = props => {
    const cutSentance = () => props.userName.length > 15 ? `${props.userName.slice(0, 15)}...` : props.userName; 
    return (
        <UserStyled theme={props.theme} themeStyle={props.themeStyle} className='d-flex align-items-center justify-content-between'>
            <div className='img_logo rounded-circle d-flex align-items-center justify-content-center'>
                {props.photoUrl === null ? <FaUserAlt size={props.imgSize}/> : <img className='img-responsive' src={props.photoUrl} />}
            </div>
            <h6 className='useName m-0 text-capitalize'>{props.userName !== null && cutSentance()}</h6>
        </UserStyled>
    )
};

const mapStateToProps = state => ({
    theme: state.theme.theme,
    themeStyle: state.theme.themeStyle
});

export default connect(mapStateToProps)(user);
