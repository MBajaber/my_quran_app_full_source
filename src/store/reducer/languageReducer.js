import * as actionType from '../action/actionTypes';

const initialState = {
    language: {
        lang: 'en',
        language: '_english.json'
    },
    site_language: null
}

const languageReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.CHOOSE_LANGUAGE:
            return {...state, language: action.selectLanguage}
        case actionType.SITE_LANGUAGE:
            return {...state, site_language: action.lang}
        default:
            return state;
    }
}

export default languageReducer;