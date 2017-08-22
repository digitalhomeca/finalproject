import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';


class App extends Component {

  // let random = "";
  
  //   componentdidmount(){
  //     random = <Footer/>
  //   }
  
  render() {
    return (
      <div className="App">
        <Navigation />
        {this.props.children}
  {/* random here instead of footer */}
        <Footer /> 
      </div>
    );
  }
}


export default App;

