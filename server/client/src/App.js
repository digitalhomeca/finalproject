import React, { Component } from 'react';
// import {Link} from 'react-router';
import './App.css';
import Navigation from './Navigation';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}



export default App;

