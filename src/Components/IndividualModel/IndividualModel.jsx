import React, { Component } from 'react';
import { Link } from 'react-router';
import './IndividualModel.css';


class IndividualModel extends Component {

  render() {

    return (

      <div className='elevator-model-div'>
        <div className='interior-model-div'>
          <p className='indiv-elev-title'>{this.props.name}</p>
          <div className='horizontal-line' />
          <p className='capacity'>Max Capacity: {this.props.capacity} people</p>
          <p className='description'>Our {this.props.name} model is perfect for buildings that have {this.props.range} floors.
          This model comes with updated safety features, reinforced steel framing, and glass windows.</p>
          <button className='elevator-type-button'>
            <Link to='/products' className='elevator-type'>View More Info</Link>
          </button>
        </div>
      </div>

    );
  }
 
} 

export default IndividualModel;
 