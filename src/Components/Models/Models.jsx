import React, { Component } from 'react';
import IndividualModel from '../../Components/IndividualModel';
import models from '../../models.json';
import './Models.css';


class Models extends Component {

  render() {
    return (
      <div className='models-section'>
        <div className='models-header'> 
          <h3 className='models-top-header'>Our Elevator Models</h3>
          <h2 className='models-lower-header'>Discover the elevator to fit your needs.</h2>
        </div>
        <div className='elevator-models'>
          { models.map((model) => {
            return (
              <IndividualModel key={model.id} name={model.name} range={model.range}
                capacity={model.capacity} />
            )
          })}
        </div>
      </div>
    );
  }
 
} 

export default Models;
 