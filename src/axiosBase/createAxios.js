import axios from 'axios';

const instance = axios.create({
    baseURL: '//api.mp3quran.net/api/'
});

export default instance;