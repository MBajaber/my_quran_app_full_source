import React, { useEffect, useReducer, useState } from 'react';
import { ImamPageStyled } from './imamPageStyled';
import Form from 'react-bootstrap/Form';
import SurahBox from '../surahBox/surahBox';
import axios from '../../axiosBase/createAxios';
import ErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import Loader from '../Loader/loader';
import { Redirect  } from 'react-router-dom';
import * as favoriteActions from '../../store/action/favoriteActions';
import * as settingActions from '../../store/action/settingActions';
import * as getDataActions from '../../store/action/getDataActions';

const initialState = {
    suraNumbers: [],
    suraNames: [],
    allSurasBoxs: []
}

const myReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'surahNumbers':
            return { ...state, suraNumbers: [...action.numbers] }
        case 'surahNames':
            return { ...state, suraNames: [...action.names] }
        case 'allSurasBoxs':
            return { ...state, allSurasBoxs: [...action.allSurasBoxes] }
        default:
            return state;
    }
}

const ImamPage = ({ startRequest, language, suras, successRequest, failRequest, server, getData, suraLink, isFromFavouritePlaylist, showPlayer, addToPlaylist, playlist, loading, site_language, theme, themeStyle}) => {
        
    const [state, dispatch] = useReducer(myReducer, initialState);
    const [search, setSearch] = useState('');
    const [filterSearch, setFilterSearch] = useState();

    useEffect(() => {
        let isCurrent = true
        const api = () => {
            startRequest();
            axios.get(`/translations?languages=${language.lang}`)
            .then(res => {
                if (isCurrent) {
                    dispatch({type: 'surahNumbers', numbers: suras});
                    successRequest();
                    let arrayNames = [];
                    if(suras) {
                        suras.map(num => arrayNames.push(res.data[language.lang][`sura${num}`]));
                    }
                    dispatch({type: 'surahNames', names: arrayNames})
                }
            })
            .catch(error => {
                if (isCurrent) {
                    failRequest(error)
                }
            });
        }

        api();

        return () => {
            isCurrent = false;
        }
    }, [language.lang]);

    const clickedHandler = (index) => {
        let fixNum = index.length === 1 ? `00${index}` : index.length === 2 ? `0${index}` : index;
        suraLink(`${server}/${fixNum}.mp3`);
        isFromFavouritePlaylist(false);
        showPlayer();
    }

    const addFavFun = (data, num, suraName) => {
        let setData = {...data, number: num};
        const collectData = {allDataPlaylist: data, isFavorite: setData.isFavorite, server: `${setData.allData.Server}/${setData.number}.mp3`, number: setData.number, name: setData.allData.name, rewaya: setData.allData.rewaya, suraName: suraName};
        addToPlaylist(collectData);
    }

    useEffect(() => {
        let array2 = [];
        state.allSurasBoxs.filter(sura => {
            if(search === '') {
                array2 = [state.allSurasBoxs];
                setFilterSearch(array2);
            } else if(sura.props.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                array2.push(
                    <SurahBox
                    key={`${server}/${sura.props.name}/${sura.props.number}/${sura.props.isFavor}`}
                    name={sura.props.name}
                    server={sura.props.server}
                    number={sura.props.number}
                    clicked={() => clickedHandler(sura.props.number)}
                    addFav={(data) => addFavFun(data, sura.props.number, sura.props.name)}
                    isFavor={sura.props.isFavor}
                    allData={sura.props.allData}
                    copyText={sura.props.copyText}
                />);
            }
            return array2;
        });
        setFilterSearch(array2);
    }, [search]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    let data = <Loader />;

    let arr = [];
    const suraLoop = () => {
        let sing= null;
        if(server && state.suraNames && state.suraNumbers && state.suraNumbers.length > 0 && state.suraNumbers) {
            if(playlist && playlist.length > 0) {
                for(let i=0; i < state.suraNumbers.length; i++) {
                    let myNumber= null;
                    let successFav = false;
                    myNumber = state.suraNumbers[i].length === 1 ? `00${state.suraNumbers[i]}` : state.suraNumbers[i].length === 2 ? `0${state.suraNumbers[i]}` : state.suraNumbers[i];
                    for (let k=0; k < playlist.length; k++) {
                        sing= getData.name === playlist[k].name && myNumber === playlist[k].number && `${getData.Server}/${myNumber}.mp3` === playlist[k].server && state.suraNames[i] === playlist[k].suraName;
                        if(sing){
                            successFav = sing;
                        }
                    }

                    arr.push(
                        <SurahBox
                            key={`${server}/${state.suraNames[i]}/${myNumber}`}
                            name={state.suraNames[i]}
                            server={getData.Server}
                            number={myNumber}
                            clicked={() => clickedHandler(state.suraNumbers[i])}
                            addFav={(data) => addFavFun(data, myNumber, state.suraNames[i])}
                            isFavor={successFav}
                            allData={getData}
                            copyText={`${server}/${myNumber}.mp3`}
                        />
                    )
                }
            } else {
                for(let i=0; i < state.suraNumbers.length; i++){
                    let myNumbers= null;
                    let successFavs = false;
                    myNumbers = state.suraNumbers[i].length === 1 ? `00${state.suraNumbers[i]}` : state.suraNumbers[i].length === 2 ? `0${state.suraNumbers[i]}` : state.suraNumbers[i];
                    arr.push(
                        <SurahBox
                            key={`${server}/${state.suraNames[i]}/${myNumbers}`}
                            name={state.suraNames[i]}
                            server={getData.Server}
                            number={myNumbers}
                            clicked={() => clickedHandler(state.suraNumbers[i])}
                            addFav={(data) => addFavFun(data, myNumbers, state.suraNames[i])}
                            isFavor={successFavs}
                            allData={getData}
                            copyText={`${server}/${myNumbers}.mp3`}
                        />
                    )
                }
            }
        }
        setFilterSearch(arr);
        dispatch({type: 'allSurasBoxs', allSurasBoxes: arr});
    }
    
    useEffect(() => {
        server && state.suraNames && state.suraNumbers && state.suraNumbers.length > 0 && state.suraNumbers && suraLoop();
    }, [server, state.suraNames, state.suraNumbers, state.suraNumbers]);

    if(!loading && site_language) {
        data = (
            <>
                {getData === null ? <Redirect to='/' /> : null}
                <ImamPageStyled theme={theme} themeStyle={themeStyle} site_lang={language.lang}>
                    <div className='top-search-rewaya mb-5'>
                        <div className='top-search mb-2 mb-md-0'>
                            <Form>
                                <Form.Control type='text' placeholder={`${language.lang === 'ar' ? '...' + site_language.search + ' ' + site_language.surah_name : site_language.search + ' ' + site_language.surah_name + '...'}`} className='rounded-pill search-filed' onChange={e => setSearch(e.target.value)} dir='auto' />
                            </Form>
                        </div>
                    </div>
                    <ul className='all-surah-name'>
                        {filterSearch}
                    </ul>
                </ImamPageStyled>
            </>
        )
    }
    return data;
};

const mapStateToprops = state => ({
    getData: state.getData.getData,
    suras: state.getData.suras,
    loading: state.getData.loading,
    server: state.getData.server,
    playlist: state.fav.playlist,
    theme: state.theme.theme,
    themeStyle: state.theme.themeStyle,
    language: state.lang.language,
    site_language: state.lang.site_language
})

const mapDispatchToprops = dispatch => ({
    showPlayer: () => dispatch(settingActions.showPlayer()),
    suraLink: (link) => dispatch(getDataActions.suraLink(link)),
    startRequest: () => dispatch(getDataActions.startRequest()),
    successRequest: () => dispatch(getDataActions.successRequest()),
    failRequest: (error) => dispatch(getDataActions.failRequest(error)),
    addToPlaylist: (item) => dispatch(favoriteActions.addToPlayList(item)),
    isFromFavouritePlaylist: (bool) => dispatch(favoriteActions.isFromFavouritePlaylist(bool)),
})

export default connect(mapStateToprops, mapDispatchToprops)(ErrorHandler(ImamPage, axios));