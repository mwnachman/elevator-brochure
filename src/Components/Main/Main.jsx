import React, { Component } from 'react';
import MainPic from '../../Components/MainPic';
import Models from '../../Components/Models';
import './Main.css';


class Main extends Component {

  render () {
    return (
      <div className='main-page'>
        <MainPic />
        <Models />
      </div>
    )
  }
}

export default Main;
