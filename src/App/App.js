import React, { lazy, Suspense, useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Layout from '../components/layout/layout';
import Loading from '../components/Loader/loader';
import {connect} from 'react-redux';
import axios from '../axiosBase/createAxios';
import withErrorHandler from '../hoc/withErrorHandler/withErrorHandler';
import * as favoriteActions from '../store/action/favoriteActions';
import * as themeActions from '../store/action/themeActions';
import * as languageActions from '../store/action/langaueActions';
import * as authActions from '../store/action/authActions';
import { auth } from '../firebase';

const AsyncMain = lazy(() => import('../containers/Home'));
const AsyncImamPage = lazy(() => import('../components/imamPage/ImamPage'));
const AsyncFavorite = lazy(() => import('../containers/Favorite/index'));
const AsyncRadios = lazy(() => import('../containers/Radios/index'));
const AsyncPAGENotFound = lazy(() => import('../containers/404_page/404_page'));
const AsyncLogin = lazy(() => import('../containers/auth/logIn/login'));
const AsyncSignUp = lazy(() => import('../containers/auth/signUp/signup'));

const App = ({ language, siteLanguage, playlistStorageFunc, toggleTheme, changeLanguage, playlist, login}) => {
  
  const playlistStorage = useState(JSON.parse(localStorage.getItem('playlist')) || [])[0];
  const themeStorageValue = useState(JSON.parse(localStorage.getItem('isThemeIsDark')) || false)[0];
  const storageLangauage = useState(JSON.parse(localStorage.getItem('language')) || 'en')[0];
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user) {
        login({
          name: user.displayName !== null ? user.displayName : language.lang === 'ar'? 'البطل' : 'unKnown',
          photo: user.photoURL
        })
      }
    })

    return unsubscribe;

  }, []);

  useEffect(() => {
    let isCurrent = true;
    const api = () => {
      axios.get(`translations?languages=${language.lang}`)
      .then(res => {
        if (isCurrent) {
          siteLanguage(res.data[language.lang]);
        }
      })
      .catch(error => {
        if (isCurrent) {
          return error
        }
      });
    }

    api();
    return () => {
      isCurrent = false;
    }

  }, [language]);
  
  useEffect(() => {
    if(playlistStorage) {
      playlistStorageFunc(playlistStorage);
    }
    if(themeStorageValue) {
      toggleTheme(themeStorageValue);
    }
    
      changeLanguage(storageLangauage);
    
    document.getElementsByTagName('html')[0].setAttribute('lang', storageLangauage);
    
    if(['ar', 'ur', 'ug', 'fa'].includes(storageLangauage)) {
      document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
    } else {
      document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr');
    }
  }, [storageLangauage]);

  useEffect(() => {
    localStorage.setItem('playlist', JSON.stringify(playlist));
  }, [playlist]);
  
  let routes = (
    <Switch>
      <Route path='/' render={props => <AsyncMain {...props} />} exact />
      <Route path='/reciter/:immam_Name' render={props => <AsyncImamPage {...props} />} />
      <Route path='/favorite'  render={props => <AsyncFavorite {...props} />} />
      <Route path='/radios' render={props => <AsyncRadios {...props} />} />
      <Route path='/radios' render={props => <AsyncRadios {...props} />} />
      <Route path='/login' render={props => <AsyncLogin {...props} />} />
      <Route path='/signup' render={props => <AsyncSignUp {...props} />} />
      <Route render={props => <AsyncPAGENotFound {...props} />} />
    </Switch>
  );

  return siteLanguage ? (
    <div className="App">
      <Layout>
        <Suspense fallback={<Loading />}>{routes}</Suspense>
      </Layout>
    </div>
  ) : null;
};

const mapStateToProps = state => ({
  playlist: state.fav.playlist,
  language: state.lang.language,
  siteLanguage: state.lang.site_language
});

const mapDispatchToProps = dispatch => ({
  playlistStorageFunc: (items) => dispatch(favoriteActions.playlistStorage(items)),
  toggleTheme: (items) => dispatch(themeActions.toggleTheme(items)),
  siteLanguage: (lang) => dispatch(languageActions.siteLanguage(lang)),
  changeLanguage: (lang) => dispatch(languageActions.changeLanguage(lang)),
  login: (data) => dispatch(authActions.login(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(App, axios));