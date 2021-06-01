import * as actionType from '../action/actionTypes';

const initialState = {
    loading: false,
    letters: null,
    lettersIndex: null,
    allElementsImams: null,
    getData: null,
    suras: [],
    server: null,
    suraLink: null,
    isRandom: false,
    isRadioPage: false
}

const getDataReducer = (state = initialState, action) => {
    switch(action.type) {
        //  Request
        case actionType.START_MAIN:
            return {...state, loading: true, isRandom: false};
            // return {...state, loading: true, letters: null, lettersIndex: null, allElementsImams: null, server: null, suras: [], isRandom: false};
        case actionType.SUCCESS_MAIN:
            return {...state, loading: false, letters: action.letters, lettersIndex: action.letterIndexs, allElementsImams: action.allElements};
        case actionType.START_REQUEST:
            return {...state, loading: true};
        case actionType.SUCCESS_REQUEST:
            return {...state, loading: false};
        case actionType.FAIL_REQUEST:
            return {...state, loading: false};

        // Get Data
        case actionType.GET_IMAM_DATA:
            return {...state, getData: action.imamData, suras: [...action.suras], isRandom: true};
        case actionType.GET_SERVER:
            return {...state, server: action.server};
        case actionType.SURA_LINK:
            return {...state, suraLink: action.link};
        case actionType.SURA_LINK_RANDOM:
            return {...state, suraLink: `${state.server}/${action.number}.mp3`};
        case actionType.START_RADIO_REQUEST:
            return {...state, loading: true}
        case actionType.STOP_RADIO_REQUEST:
            return {...state, loading: false}
        case actionType.iS_RADIO_PAGE:
            return {...state, isRadioPage: action.value}
        
        default:
            return state;
    }
}

export default getDataReducer;