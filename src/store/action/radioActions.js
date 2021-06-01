import * as actionType from './actionTypes';

export const isRadioPage = (value) => ({type: actionType.iS_RADIO_PAGE, value: value});
export const startRadioRequest = () => ({type: actionType.START_RADIO_REQUEST});
export const stopRadioRequest = () => ({type: actionType.STOP_RADIO_REQUEST});