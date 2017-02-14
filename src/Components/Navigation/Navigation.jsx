import React, { Component } from 'react';
import { Link } from 'react-router';
import './Navigation.css';


class Navigation extends Component {

  render() {
    return (
      <div className='navbar'>
        <div className='navbar-grad'>
          <div className='nav-bar-text'>
            <div className='co-name'>
              <Link to='/' className='co-name'>
                <span className='co-name-1'>ORION</span> <span className='co-name-2'> ELEVATOR COMPANY</span>
              </Link>
            </div>
            <div className='main-nav-div'>
              <Link to='/products' className='main-nav'>Products</Link>
              <Link to='/services' className='main-nav'>Services</Link>
              <Link to='/about' className='main-nav'>About</Link>
              <Link to='/contactus' className='main-nav'>Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Navigation;
