import * as actionType from '../action/actionTypes';

const initialState = {
    user: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.LOGIN:
            return {...state, user: action.payload};
        case actionType.SIGNOUT:
            return {...state, user: null};
        default: 
            return state;
    }
}

export default authReducer;