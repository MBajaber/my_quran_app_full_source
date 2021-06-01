import React, { useEffect, useState } from 'react';
import Letter from '../../components/letters/letters';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from 'axios';
import ImamBoxs from '../../components/imamBoxs/imamBoxs';
import { HomeStyled } from './homeStyled';
import { connect } from 'react-redux';
import Loader from '../../components/Loader/loader';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as favoriteActions from '../../store/action/favoriteActions';
import * as radioActions from '../../store/action/radioActions';
import * as getDataActions from '../../store/action/getDataActions';

const Main = ({ isFavoritePage, isRadioPage, startMain, emptyFavFromSurabox, language, successMain, failRequest, letters, allElementsImams, lettersIndex, getDataFunc, getServer, loading, theme, themeStyle, site_language  }) => {
    const [allElements, setAllElements] = useState([]);
    const [search, setSearch] = useState('');
    const [rewayas, setRewayas] = useState([]);
    const [chooseSelect, setChooseSelect] = useState('select rewaya');
    const [allSections, setAllSections] = useState([]);

    useEffect(() => {
        let isCurrent = true;
        const myAPI = () => {
            isFavoritePage(false);
            isRadioPage(false);
            startMain();
            emptyFavFromSurabox();
            axios.get(`//mp3quran.net/api/${language.language}`)
            .then(res => {
                if (isCurrent) {
                    const arrayOfLetters = [];
                    const allElementsArrays = [];
                    const arrayOfLettersIndex = [];
                    let allRewayas = [];
                    const allArraysElements = res.data.reciters;
                    const myData = allArraysElements.map(letter => letter.letter);
                    myData.filter((element, index) => element !== myData[index + 1] && arrayOfLetters.push(element));
                    myData.filter((element, index) => element !== myData[index + 1] && arrayOfLettersIndex.push(index));
                    allArraysElements.map(element => allElementsArrays.push(element));
                    setAllElements(allArraysElements);
                    allArraysElements.map(e => {
                        if(!allRewayas.find(z => z === e.rewaya)) {
                            return allRewayas.push(e.rewaya);
                        }
                        return null
                    });
                    setRewayas(allRewayas);
                    successMain(arrayOfLetters, arrayOfLettersIndex, allElementsArrays);
                }
            })
            .catch(error => {
                if (isCurrent) {
                    failRequest(error)
                }
            });
        };

        myAPI();

        return () => {
            isCurrent = false
        }
        
    }, [language]);
    
    useEffect(() => {
        let curentIndex = 0;
        let fullElementSections = [];
        if(letters && allElementsImams && lettersIndex) {
            for(let i = 0; i < letters.length; i++) {
                let speElement = allElementsImams.slice(curentIndex , lettersIndex[i] + 1);
                curentIndex= lettersIndex[i] + 1;
                fullElementSections.push({
                    letterSection: letters[i],
                    sectionElements: speElement
                });
            }
        }
        setAllSections(fullElementSections);
    }, [allElementsImams]);

    const clickedImamm = link => {
        getDataFunc(link);
        getServer(link.Server);
    };

    let show = <Loader />;

    if(!loading) {
        show = allElementsImams && (
            <HomeStyled theme={theme} themeStyle={themeStyle} site_lang={language.lang}>
                <div className='main-content-show'>
                    {letters && letters.map(letter => <Letter text={letter} id={`#letter_${letter}`} key={`${letter}${Math.random() * 1000000}`} />) }
                </div>
                <div className='search_select mt-4 mb-4'>
                    <Row>
                        <Col lg='7'>
                            <div className='form-search mb-3 mb-lg-0'>
                                <Form>
                                    <Form.Control type='text' placeholder={`${site_language && site_language.search} ${site_language && site_language.reciter}`} className='rounded-pill search-filed' onChange={e => setSearch(e.target.value)} dir='auto' />
                                </Form>
                            </div>
                        </Col>
                        <Col lg='5'>
                            <div className='form-select'>
                                <Form>
                                    <Form.Group controlId="exampleForm.SelectCustom">
                                        <Form.Control as="select" custom className='select' value={chooseSelect} onChange={e => setChooseSelect(e.target.value)}>
                                        <option value='select rewaya' disabled='disabled'>{`${site_language && site_language.options} ${site_language && site_language.reciters}`}</option>
                                        <option value='all'>{language.lang === 'ar' ? 'الكل' : 'all'}</option>
                                        {rewayas.map(option => <option key={option} value={option}>{option}</option>)}
                                        </Form.Control>
                                    </Form.Group>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='show-all-names'>
                    {
                        allElements && allElements.length > 0 && allSections.map((element, index) => {
                            return (
                                <ImamBoxs
                                    key={`${element.letterSection} ${element.letterSection} ${Math.random() * 1000000}`}
                                    letter={element.letterSection}
                                    boxes={element.sectionElements}
                                    search={search}
                                    chooseSelect={chooseSelect}
                                    myIndex={index}
                                    clickedImamm={(data) => clickedImamm(data)}
                                />
                            )
                        })
                    }
                </div>
            </HomeStyled>
        )
    }
    return show;
};

const mapStateToProps = state => ({
    getData: state.getData.getData,
    loading: state.getData.loading,
    letters: state.getData.letters,
    lettersIndex: state.getData.lettersIndex,
    allElementsImams: state.getData.allElementsImams,
    theme: state.theme.theme,
    themeStyle: state.theme.themeStyle,
    language: state.lang.language,
    site_language: state.lang.site_language
});

const mapDispatchToProps = dispatch => ({
    startMain: () => dispatch(getDataActions.startMain()),
    successMain: (letters, lettersIndex, allEllemnt) => dispatch(getDataActions.successMain(letters, lettersIndex, allEllemnt)),
    failRequest: () => dispatch(getDataActions.failRequest()),
    getDataFunc: (data) => dispatch(getDataActions.getData(data)),
    getServer: (server) => dispatch(getDataActions.getServer(server)),
    emptyFavFromSurabox: () => dispatch(favoriteActions.emptyFavFromSurabox()),
    isFavoritePage: (value) => dispatch(favoriteActions.isFavoritePage(value)),
    isRadioPage: (value) => dispatch(radioActions.isRadioPage(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Main, axios));