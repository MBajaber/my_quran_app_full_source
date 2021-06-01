import * as actionType from '../action/actionTypes';

const initialState = {
    isAsideShow: false,
    showPlayer: false
}

const settingReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.CLOSE_ASIDE:
            return {...state, isAsideShow: false};
        case actionType.OPEN_ASIDE:
            return {...state, isAsideShow: true};
        case actionType.SHOW_PLAYER:
            return {...state, showPlayer: true};
        default: 
            return state;
    }
}

export default settingReducer;