import React, { Component } from 'react';
import { Link } from 'react-router'
import './Footer.css';

class Footer extends Component {

  render () {
    return (
      <div className='footer-bar'>
        <div className='footer-sec'>
          <p className='footer-section-header'>ABOUT</p>
          <p className='footer-text'>Our History</p>
          <p className='footer-text'>Meet Our Team</p>
          <p className='footer-text'>Careers</p>
          <p className='footer-text'>Contact Us</p>
        </div>
        <div className='footer-sec'>
          <p className='footer-section-header'>SERVICES</p>
          <p className='footer-text'>Safety Upgrades</p>
          <p className='footer-text'>Load Tests</p>
          <p className='footer-text'>Maintenance</p>
          <p className='footer-text'>Repairs</p>
        </div>
        <div className='footer-sec'>
          <p className='footer-section-header'>PRODUCTS</p>
          <p className='footer-text'>
            <Link className='footer-text' to='/products'>Standard</Link>
          </p>
          <p className='footer-text'>
            <Link className='footer-text' to='/products'>Sky View</Link>
          </p>
          <p className='footer-text'>
            <Link className='footer-text' to='/products'>Mega</Link>
          </p>
        </div>
        <div className='footer-sec footer-sec-4'>
          <p className='footer-section-header'>ORION ELEVATOR COMPANY</p>
          <p className='footer-text'>123 Skyscraper Way</p>
          <p className='footer-text'>San Francisco, CA 94923</p>
          <p className='footer-text'>P: 1-415-999-1234</p>
        </div>
        <div className='horizontal-br'/>
        <div className='footer-copyright'>
          <p>Copyright &#169; 2016 Orion Elevator Company. All rights reserved.</p>
        </div>
      </div>
    )
  }
}

export default Footer; 
