import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';
import App from './Components/App';
import Main from './Components/Main';
import Products from './Components/Products';
import Services from './Components/Services';
import About from './Components/About';
import ContactUs from './Components/ContactUs';


const Routes = (props) => (

  <Router {...props}>
    <Route path='/' component={ App } >
      <IndexRoute component={ Main } />
      <Route path='products' component={ Products } />
      <Route path='services' component={ Services } />
      <Route path='about' component={ About } />
      <Route path='contactus' component={ ContactUs } />
    </Route>
  </Router>

);

export default Routes;
