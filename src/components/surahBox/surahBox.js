import React, { useReducer, useCallback, useState, useEffect } from 'react';
import { SurahBoxList } from './surahBoxStyled';
import PlayBtn from '../playBtn/playBtn';
import HeartBtn from '../heartBox/heartBox';
import LinkBtn from '../linkBtn/linkBtn';
import DownloadBtn from '../downloadBtn/downloadBtn';
import ToastComp from '../toastCompo/toastCompo';
import { connect } from 'react-redux';

import * as favoriteActions from '../../store/action/favoriteActions';

const initialState = (state, action) => {
    switch(action.type) {
        case 'isToastOpen':
            return {...state, isToastOpen: true, msg: action.msg, isFavorite: action.isFavorite}
        case 'isToastClose':
            return {...state, isToastOpen: false, msg: {}, isFavorite: state.isFavorite}
        case 'isFavorite':
            return {...state, isFavorite: action.isFavorite}
        case 'Msg':
            return {...state, msg: action.msg}
        default: 
        return state;
    }
}

const SurahBox = ({ isFavor, playlist, allData, number, name, server, deleteFav, suraLink, copyText, language, addFav, clicked, isPlayToggle, site_language, deleteItemFromPlaylist, theme, themeStyle}) => {
    
    const [surahState, dispatch] = useReducer(initialState, {
        isToastOpen: false,
        isFavorite: isFavor,
        msg: {}
    });

    const [isFav, setIsFav] = useState(isFavor);
    const [linkState, setLinkState] = useState(false);

    const toggleFav = () => {
        if(isFav) {
            playlist.map(list => {
                if(list.server === `${allData.Server}/${number}.mp3` && list.number === number && list.suraName === name) {
                    return deleteItemFromPlaylist({server: list.server});
                }
                return null;
            });
        }
        setIsFav(!isFav);
    };

    useEffect(() => {
        if(`${server}/${number}.mp3` === deleteFav) {
            setIsFav(false);
        }
    }, [deleteFav, isFav, number, server]);

    useEffect(() => {
        if(suraLink === copyText) {
            setLinkState(true);
        } else {
            setLinkState(false);
        }
    }, [suraLink, copyText]);

    const setTime = () => setTimeout(() => {closeToast()}, 5000);

    const openToast = useCallback((msg) => {
        dispatch({type: 'isToastOpen', msg: {...msg}, isFavorite: msg.isFavorite });
    }, []);

    const closeToast = () => {
        clearTimeout(setTime);
        dispatch({type: 'isToastClose', msg: {}, isFavorite: surahState.isFavorite});
    };

    const cpiedFunc = () => {
        clearTimeout(setTime);
        openToast({title: language.lang === 'ar' ? 'تم النسخ' : 'Copied', myMsg: language.lang === 'ar' ? 'تم نسخ الرابط' : 'The Link is copied', myClass: 'added_item', isFavorite: surahState.isFavorite});
        navigator.clipboard.writeText(copyText);
    };

    const favFunc = () => {
        clearTimeout(setTime);
        if(surahState.isFavorite) {
            openToast({title: site_language.delete, myMsg: site_language.delete + ' ' + site_language.favorite, myClass:'remove_item', isFavorite: surahState.isFavorite});
            dispatch({type: 'isFavorite', msg: 'the item was removed from favorites', isFavorite: !surahState.isFavorite });
        } else {
            openToast({title: site_language.add, myMsg: site_language.adding_done_susseccfully, myClass: 'added_item', isFavorite: surahState.isFavorite});
            dispatch({type: 'isFavorite', msg: 'the item was removed from favorites', isFavorite: !surahState.isFavorite });
        }
    }

    surahState.isToastOpen ? setTime() : clearTimeout(setTime);
    
    const addToFavList = () => {
        favFunc();
        addFav({isFavorite: !surahState.isFavorite, allData: allData });
    }

    return site_language && (
        <>
            {surahState.isToastOpen && <ToastComp msg={surahState.msg} />}
            <SurahBoxList className='d-flex justify-content-between flex-wrap pr-1 pl-1 pr-sm-3 pl-sm-3' title={name} theme={theme} themeStyle={themeStyle} linkState={linkState}>
                <div className='icon_name_number d-flex align-items-center' onClick={clicked}>
                    <PlayBtn size={30} clicked={isPlayToggle} linkState={linkState} />
                    <div className='surah-box-number' onClick={isPlayToggle}>{number}</div>
                    <div className='surah-box-name text-capitalize' onClick={isPlayToggle}>{name}</div>
                </div>
                <div className='surah-box-imam-page-info d-flex align-items-center'>
                    <div className='list hide_on_hover' title='copy link' onClick={() => cpiedFunc()}>
                        <LinkBtn />
                    </div>
                    <div className='list hide_on_hover heart' title={isFavor ? site_language.delete + ' ' + site_language.favorite : site_language.add_files_playlist} onClick={addToFavList} >
                        <HeartBtn size={22} server={server} number={number} isFav={isFav} toggleFav={toggleFav} />
                    </div>
                    <div className='list hide_on_hover heart' title='download' >
                        <DownloadBtn size={22} url={copyText} suraName={name} />
                    </div>
                </div>
            </SurahBoxList>
        </>
    );
};

const mapStateToProps = state => ({
    suraLink: state.getData.suraLink,
    playlist: state.fav.playlist,
    deleteFav: state.fav.deleteFav,
    theme: state.theme.theme,
    themeStyle: state.theme.themeStyle,
    language: state.lang.language,
    site_language: state.lang.site_language
});

const mapDispatchToProps = dispatch => ({
    deleteItemFromPlaylist: (item) => dispatch(favoriteActions.removeItemFromPlayList(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(SurahBox);