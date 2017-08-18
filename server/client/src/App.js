import React, { Component } from 'react';
// import {Link} from 'react-router';
// import './css/app.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';



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

