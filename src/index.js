import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import Favorite from './store/reducer/favorite';
import GetData from './store/reducer/getDataReducer';
import Language from './store/reducer/languageReducer';
import Setting from './store/reducer/settingReducer';
import Theme from './store/reducer/themeReducer';
import Auth from './store/reducer/authReducer';
import thunk from 'redux-thunk';

const combineReducer = combineReducers({
  fav: Favorite,
  getData: GetData,
  lang: Language,
  setting: Setting,
  theme: Theme,
  auth: Auth
});

const store = createStore(combineReducer, applyMiddleware(thunk));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  <React.StrictMode>
    {app},
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();