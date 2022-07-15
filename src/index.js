import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import Login2 from './components/Login2';

const reducers = combineReducers({ form: formReducer });

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/login2' element={<Login2 />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/home' element={<App />} />
      </Routes>
    </Provider>
  </BrowserRouter>
  // </Provider>
);
