import * as actionType from '../action/actionTypes';

const initialState = {
    isThemeDark: false,
    theme: 'light',
    themeStyle: {
        all: {
            mainColor: '#39c2c9',
            secondaryColor: '#fa7e29',
            whiteColor: '#FFF',
            grayColor: '#636a6f',
            blackColor: '#1d1f21',
            redColor: '#dc3545',
            yellowColor: '#f5b44b',
            mutedColor: '#6c757d'
        },
        light: {
            bg: '#ebedee',
            secondaryColor: '#fff',
            textNormal: '#1d1f21',
            boxShadow: '0 2px 8px 0 hsl(0deg 0% 64% / 19%)'
        },
        dark: {
            bg: '#282c35',
            secondaryColor: '#363c48',
            textNormal: '#fff',
            boxShadow: '0 2px 15px 0 rgb(26 26 27 / 64%)'
        }
    }
}

const themeReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.IS_THEME_IS_DARK:
            return {...state, isThemeDark: !state.isThemeDark, theme: state.isThemeDark ? 'light' : 'dark'}
        case actionType.THEME_STORAGE:
            return {...state, isThemeDark: action.value, theme: action.value ? 'dark' : 'light'}
        default:
            return state;
    }
}

export default themeReducer;