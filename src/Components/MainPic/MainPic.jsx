import React, { Component } from 'react';
import picture from '../../Assets/BannerImage.png';
import './MainPic.css';

class MainPic extends Component {

  render () {
    return (
      <div className='main-pic-section'>
        <img src={picture} alt=''/>
        <div className='text-box'>
          <p className='safety-mod-text'>We specialize in elevating<br/>
            <span className='bold-safety'> safety</span> & <span 
            className='bold-safety'> modernization</span></p>
          <p className='view-prods-text'>View Products ></p>
        </div>
      </div>
    )
  }
}

export default MainPic;
