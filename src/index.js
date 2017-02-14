import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory as history } from 'react-router';
import Routes from './routes';
import './index.css';


ReactDOM.render(
  <Routes history={history} />,
  document.getElementById('root')
);
