import React, { useState } from 'react';
import { PlayerContent } from './audioPlayerStyled';
import { AiOutlineClose } from 'react-icons/ai';
import { FaRandom } from 'react-icons/fa';
import { CgTrashEmpty } from 'react-icons/cg';
import { AiFillHeart } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import AudioFavoriteList from './AudioFavoriteList/audioFavoriteList';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import * as favoriteActions from '../../store/action/favoriteActions';
import * as settingActions from '../../store/action/settingActions';
import * as getDataActions from '../../store/action/getDataActions';

const SongPlayer = props => {
    const [showfavPlaylist, setShowfavPlaylist] = useState(false);
    const favPlaylistclasses = showfavPlaylist ? ['playlist_list', 'show'] : ['playlist_list'];
    const [autoPlayAudio, setAutoPlayAudio] = useState(false);

    const randomChoice = () => {
        if(props.isRandom) {
            const getRandom = Math.floor(Math.random() * props.suras.length).toString()
            const num = props.suras[getRandom].length === 1 ? `00${props.suras[getRandom]}` : props.suras[getRandom].length === 2 ? `0${props.suras[getRandom]}` : props.suras[getRandom];
            props.suraLinkRandom(num);
            props.isFromFavouritePlaylist(false);
        }
    }

    const deleteItems = (item) => {
        props.deleteFavFromSurabox(item.server);
        props.deleteItemFromPlaylist(item);
    }

    const clickedPlaylist = (link) => {
        props.isFavoritePageFunc(true);
        props.suraLinkFunc(link);
        props.showPlayer();
        props.isFromFavouritePlaylist(true);
    }

    return (
        <PlayerContent suras={props.suras} theme={props.theme} themeStyle={props.themeStyle} isFavPlaylist={props.isFavPlaylist} showfavPlaylist={showfavPlaylist} autoPlayAudio={autoPlayAudio} isFavoritePage={props.isFavoritePage} >
            {!props.isFavPlaylist && !props.isFavoritePage && (
                <div className='random' onClick={randomChoice} title={props.language.lang === 'ar' ? 'عشوائي' : 'Random'}>
                    <FaRandom size={22} />
                </div>
            )}
            {!props.isFavoritePage && (
                <div className='favorite_box d-none d-sm-block' title={props.site_language.favorite}>
                    <AiFillHeart size={24}  onClick={() => setShowfavPlaylist(!showfavPlaylist)} />
                </div>
            )}
            <div className='autoPlay_box' title={props.site_language.autoplay_next_surahs}>
                {!props.isRadioPage && <BsArrowRight size={30}  onClick={() => setAutoPlayAudio(autoPlayAudio => !autoPlayAudio)}/>}
            </div>
            <AudioPlayer 
                autoPlay
                src={props.suraLink}
                onEnded={e => {
                    if(autoPlayAudio) {

                        if(!props.isFavoritePage) {
                        
                            let regex = /\d+/g;
                            let string = props.suraLink;
                            let matches = +string.match(regex)[2];
                            let number = null;
                        
                            props.suras.map((element, index) => {
                                if(+element === matches) {
                                    return number = index + 1;
                                }
                                return null;
                            })
    
                            if(props.suras[number] !== undefined) {
                                let numberString = props.suras[number].length === 1 ? `00${props.suras[number]}` : props.suras[number].length === 2 ? `0${props.suras[number]}` : props.suras[number];
                                props.suraLinkFunc(`${props.server}/${numberString}.mp3`);
                            }
                        } else {
                            props.playlist.map((element, index) => {
                                if(props.suraLink === element.server) {
                                    if(props.playlist.length -1 !== index) {
                                        return props.suraLinkFunc(props.playlist[index + 1].server);
                                    }
                                }
                                return null;
                            });
                        }
                    }
                }}
            />
            <Container>
                <div className='playlist_items d-none d-sm-block'>
                    <div className={favPlaylistclasses.join(' ')}>
                        <div className='header d-flex'>
                            <AiOutlineClose size={20} onClick={() => {
                                props.isFavoritePageFunc(false);
                                setShowfavPlaylist(!showfavPlaylist);
                            }} />
                            <h5 className='m-auto'>{props.site_language.favorite}</h5>
                        </div>
                        <ul className='list-unstyled sura_list'>
                            {
                                props.playlist && props.playlist.length > 0 
                                ?  props.playlist.map((e, i) => (
                                    <AudioFavoriteList
                                        key={e.server}
                                        server={e.server}
                                        number={e.number}
                                        name={e.name}
                                        rewaya={e.rewaya}
                                        index={i}
                                        suraName={e.suraName}
                                        deleteItem={(item) => deleteItems(item)}
                                        clicked={(link, number, suraName, name) => clickedPlaylist(link, number, suraName)}
                                    />
                                ))
                                : <div className='no_list text-center text-capitalize'>{props.site_language.no_playlist_added} <CgTrashEmpty size={26} /></div>
                            }
                        </ul>
                    </div>
                </div>
            </Container>
        </PlayerContent>
    );
};

const mapStateToProps = state => {
    return {
        suraLink: state.getData.suraLink,
        suras: state.getData.suras,
        server: state.getData.server,
        isRandom: state.getData.isRandom,
        playlist: state.fav.playlist,
        isFavoritePage: state.fav.isFavoritePage,
        isFavPlaylist: state.fav.isFavPlaylist,
        theme: state.theme.theme,
        themeStyle: state.theme.themeStyle,
        language: state.lang.language,
        site_language: state.lang.site_language,
        isRadioPage: state.getData.isRadioPage
    }
}

const mapDispatchToProps = dispatch => ({
    suraLinkRandom: (data) => dispatch(getDataActions.suraLinkRandom(data)),
    deleteItemFromPlaylist: (item) => dispatch(favoriteActions.removeItemFromPlayList(item)),
    deleteFavFromSurabox: (item) => dispatch(favoriteActions.deleteFavFromSurabox(item)),
    showPlayer: () => dispatch(settingActions.showPlayer()),
    suraLinkFunc: (link) => dispatch(getDataActions.suraLink(link)),
    isFromFavouritePlaylist: (bool) => dispatch(favoriteActions.isFromFavouritePlaylist(bool)),
    isFavoritePageFunc: (value) => dispatch(favoriteActions.isFavoritePage(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(SongPlayer);