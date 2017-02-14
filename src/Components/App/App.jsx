import React, { Component } from 'react';
import Navigation from '../../Components/Navigation';
import Footer from '../../Components/Footer';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation />
          { this.props.children }
        <Footer />
      </div>
    );
  }
}

export default App;
