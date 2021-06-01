import React, { useState, useEffect } from 'react';
import { MdDelete } from 'react-icons/md';
import { PlayListStyled } from './audioFavoriteListStyled';
import { connect } from 'react-redux';
import PlayBtn from '../../playBtn/playBtn';
import DownloadBtn from '../../downloadBtn/downloadBtn';

const Playlist = props => {

    const [linkState, setLinkState] = useState(false);

    useEffect(() => {
        if(props.suraLink === props.server) {
            setLinkState(true);
        } else {
            setLinkState(false);
        }
    }, [props.suraLink, props.server]);

    const cutSentance = n => n.length >= 45 ? `${n.slice(0, 45)}...` : n;

    return (
        <PlayListStyled theme={props.theme} themeStyle={props.themeStyle} linkState={linkState}>
            <div className='play_btn d-flex align-items-center justify-content-center' onClick={() => props.clicked(props.server, props.number, props.suraName, props.name)}>
                <PlayBtn size={26} linkState={linkState} />
            </div>
            <div className='info d-flex align-items-center'>
                <div className='sura_number'>{props.number}</div>
                <div className='sura_desc'>
                    <h6 className='sura_Name text-capitalize m-0'>{props.suraName}</h6>
                    <span className='sura_info text-capitalize'>{cutSentance(`${props.name} (${props.rewaya})`)}</span>
                </div>
                <div className='sura_delete' title={props.site_language.delete} onClick={() => props.deleteItem({server: props.server})}>
                    <MdDelete size={24} />
                </div>
                <div className='download'>
                    <DownloadBtn size={24} url={props.server} suraName={props.suraName} />
                </div>
            </div>
        </PlayListStyled>
    )
}

const mapStateToProps = state => ({
    suraLink: state.getData.suraLink,
    theme: state.theme.theme,
    themeStyle: state.theme.themeStyle,
    site_language: state.lang.site_language
});

export default connect(mapStateToProps)(Playlist);