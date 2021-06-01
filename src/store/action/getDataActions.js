import * as actionType from './actionTypes';

export const startRequest = () => ({type: actionType.START_REQUEST});
export const successRequest = () => ({type: actionType.SUCCESS_REQUEST});
export const failRequest = (error) => ({type: actionType.FAIL_REQUEST, error: error});
export const startMain = () => ({type: actionType.START_MAIN});
export const successMain = (letters, letterIndexs, allElements) => ({type: actionType.SUCCESS_MAIN, letters: letters, letterIndexs: letterIndexs, allElements: allElements})

//  Get Data
export const getData = (data) => ({type: actionType.GET_IMAM_DATA, imamData: data, suras: data.suras.split(',')});
export const getServer = (server) => ({type: actionType.GET_SERVER, server: server});
export const suraLink = (link) => ({type: actionType.SURA_LINK, link: link});
export const suraLinkRandom = (randomNumber) => ({type: actionType.SURA_LINK_RANDOM, number: randomNumber});