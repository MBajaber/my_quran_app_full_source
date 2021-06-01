import * as actionType from './actionTypes';

export const changeLanguage = (lang) => {
    let language = null;
    if (lang === 'en') {
        language = '_english.json';
    } else if(lang === 'ar') {
        language = '_arabic.json';
    } else if(lang === 'fr') {
        language = '_france.json';
    } else if(lang === 'ru') {
        language = '_russia.json';
    } else if(lang === 'de') {
        language = '_germany.json';
    } else if(lang === 'es') {
        language = '_spain.json';
    } else if(lang === 'tr') {
        language = '_turkey.json';
    } else if(lang === 'cn') {
        return {type: actionType.CHOOSE_LANGUAGE, selectLanguage: {lang: 'en', language: '_china.json'}}
    } else if(lang === 'tl') {
        return {type: actionType.CHOOSE_LANGUAGE, selectLanguage: {lang: 'en', language: '_tagalog.json'}}
    } else if(lang === 'th') {
        language = '_tahi.json';
    } else if(lang === 'ur') {
        language = '_urdu.json';
    } else if(lang === 'bn') {
        language = '_bengali.json';
    } else if(lang === 'bs') {
        language = '_bosnia.json';
    } else if(lang === 'ug') {
        language = '_uyghur.json';
    } else if(lang === 'fa') {
        language = '_farsi.json';
    } else if(lang === 'tg') {
        language = '_tagalog.json';
    } else if(lang === 'ml') {
        language = '_malbari.json';
    } else if(lang === 'id') {
        language = '_indonesia.json';
    } else if(lang === 'pt') {
        language = '_portuguese.json';
    } else if(lang === 'ha') {
        language = '_hausa.json';
    } else if(lang === 'sw') {
        language = '_swahili.json';
    }
    return {type: actionType.CHOOSE_LANGUAGE, selectLanguage: {lang: lang, language: language}}
}

export const siteLanguage = (lang) => ({type: actionType.SITE_LANGUAGE, lang: lang});