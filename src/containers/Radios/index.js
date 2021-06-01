import React, { useState, useEffect } from 'react';
import { RadioStyled } from './RadiosStyle';
import { connect } from 'react-redux';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import RadioList from './radioList';
import Loading from '../../components/Loader/loader';
import * as favoriteActions from '../../store/action/favoriteActions';
import * as radioActions from '../../store/action/radioActions';
import * as getDataActions from '../../store/action/getDataActions';
import * as settingActions from '../../store/action/settingActions';

const Radios = ({ isFavoritePage, isRadioPage, language, suraLinkFunc, showPlayer, themeStyle, theme, site_language, suraLink, startRadioRequest, stopRadioRequest, loading}) => {

    const [radioLists, setRadioLists] = useState([]);
    const [copyRadioLists, setCopyRadioLists] = useState();
    const [search, setSearch] = useState('');

    useEffect(() => {
        isFavoritePage(true);
        isRadioPage(true);
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        let isCurrent = true;
        const api = () => {
            startRadioRequest();
            axios.get(`//mp3quran.net/api/2/radio_${language.lang}.json`)
            .then(res => {
                if (isCurrent) {
                    setRadioLists(res.data.Radios);
                    setCopyRadioLists(res.data.Radios);
                    stopRadioRequest();
                }
            })
            .catch(error => {
                if (isCurrent) {
                    stopRadioRequest();
                    return error;
                }
            });
        }

        api();

        return () => {
            isCurrent = false;
        };
    }, [language]);

    useEffect(() => {
        let favArray = [];
        radioLists.map(radiosList => {
            if (search === '') {
                return favArray.push(radiosList);

            } else if (radiosList.Name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                return favArray.push(radiosList)
            }
            return null
        });
        setCopyRadioLists(favArray);
    }, [search]);

    const clickedHandler = (link) => {
        console.log(link.url)
        suraLinkFunc(link.url);
        showPlayer();
    }

    let data = <Loading />

    data = !loading && (
        <RadioStyled language={language.lang} themeStyle={themeStyle} theme={theme}>
            <h2 className='title_name mb-4'>{site_language && site_language.quran_radio}</h2>
            <div className='form-search mb-5'>
                <Form>
                    <Form.Control type='text' placeholder={`${site_language && site_language.search} ${site_language && site_language.reciter}`} className='rounded-pill search-filed' onChange={e => setSearch(e.target.value)} dir='auto' />
                </Form>
            </div>
            <ul className='radios_lists'>
                {
                    copyRadioLists && copyRadioLists.length > 0 && copyRadioLists.map(radio => {
                        return (
                            <RadioList
                                key={radio.URL}
                                url={radio.URL}
                                name={radio.Name}
                                themeStyle={themeStyle.all.yellowColor}
                                clicked={(link) => clickedHandler(link)}
                                sameLink={radio.URL === suraLink}
                            />
                        )
                    })
                }
            </ul>
        </RadioStyled>
    );

    return data;
}

const mapStateToProps = state => ({
    site_language: state.lang.site_language,
    language: state.lang.language,
    theme: state.theme.theme,
    themeStyle: state.theme.themeStyle,
    suraLink: state.getData.suraLink,
    loading: state.getData.loading
});

const mapDispatchToProps = dispatch => ({
    isFavoritePage: (value) => dispatch(favoriteActions.isFavoritePage(value)),
    showPlayer: () => dispatch(settingActions.showPlayer()),
    isRadioPage: (value) => dispatch(radioActions.isRadioPage(value)),
    suraLinkFunc: (link) => dispatch(getDataActions.suraLink(link)),
    startRadioRequest: () => dispatch(radioActions.startRadioRequest()),
    stopRadioRequest: () => dispatch(radioActions.stopRadioRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Radios, axios));