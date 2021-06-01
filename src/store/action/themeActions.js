import * as actionType from './actionTypes';

export const changeTheme = () => ({type: actionType.IS_THEME_IS_DARK});
export const toggleTheme = (bool) => ({type: actionType.THEME_STORAGE, value: bool});