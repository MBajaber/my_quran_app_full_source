import React, { useState, useEffect } from 'react';
import PlayBtn from '../../components/playBtn/playBtn';
import LinkBtn from '../../components/linkBtn/linkBtn';
import { MdDelete } from 'react-icons/md';
import { connect } from 'react-redux';
import { Surahbox } from './favoriteListStyled';
import DownloadBtn from '../../components/downloadBtn/downloadBtn';

const Playlist = ({ suraLink, server, playSura, theme, themeStyle, number, name, suraName, deleteItems, rewaya}) => {

    const [linkState, setLinkState] = useState(false);

    useEffect(() => {
        if(suraLink === server) {
            setLinkState(true);
        } else {
            setLinkState(false);
        }
    }, [suraLink, server]);

    return (
        <Surahbox theme={theme} themeStyle={themeStyle} linkState={linkState}>
            <div className='icon_name_number_section d-flex flex-column'>
                <div className='icon_name_number d-flex align-items-center align-items-center'>
                    <PlayBtn size={33} color='#F5B44B' clicked={() => playSura(server)} linkState={linkState} />
                    <div className='text d-flex flex-column' onClick={() => playSura(server)}>
                        <div className='d-flex surah-box-number-number-text'>
                            <div className='surah-box-number'>{number}</div>
                            <div className='surah-box-name text-capitalize'>{suraName}</div>
                        </div>
                        <span className='immam_name text-capitalize'>{name}</span>
                        <span className='immam_rewaya text-capitalize mt-1'>{rewaya}</span>
                    </div>
                </div>
            </div>
            <div className='surah-box-imam-page-info d-flex align-items-center'>
                <div className='list m-0' title='copy link' onClick={() => navigator.clipboard.writeText(server)}>
                    <LinkBtn />
                </div>
                <div className='list m-0' title='delete'>
                    <button className='btn delete_item' onClick={() => deleteItems({server: server})}>
                        <MdDelete size={24} />
                    </button>
                </div>
                <div className='list m-0' title='delete'>
                    <DownloadBtn size={24} url={server} suraName={suraName} />
                </div>
            </div>
        </Surahbox>
    )
}

const mapStateToProps = state => ({
    suraLink: state.getData.suraLink,
    theme: state.theme.theme,
    themeStyle: state.theme.themeStyle
});

export default connect(mapStateToProps)(Playlist);
