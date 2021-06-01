import * as actionsType from './actionTypes';

export const login = data => ({type: actionsType.LOGIN, payload: data});
export const signOut = () => ({type: actionsType.SIGNOUT});