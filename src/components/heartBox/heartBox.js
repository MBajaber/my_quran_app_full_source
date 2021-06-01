import React from 'react';
import './heartBox.css';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const HeartBox = props => (
    <button className='heart_box_section' onClick={props.toggleFav} >
        {props.isFav 
            ? <span className='full_heart_btn'><AiFillHeart size={props.size} color={props.colorOne} /></span> 
            : <span className='empty_heart_btn'><AiOutlineHeart size={props.size} color={props.colorTwo} /></span> 
        }
    </button>
);

export default HeartBox;