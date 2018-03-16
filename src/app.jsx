import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Demo from './components/Demo/Demo';
import './assets/css/main.scss';
import '../public/favicon.ico';

const HotMiddleware = () => (
  MIDDLEWARE
    ? <Demo />
    : <AppContainer warnings={false}><Demo /></AppContainer>);

render(HotMiddleware(), document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
