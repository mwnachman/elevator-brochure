import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory as history } from 'react-router';
import Routes from './routes';
import './index.css';


ReactDOM.render(
  <Routes history={history} />,
  document.getElementById('root')
);
