import React, {Component} from 'react';
import {Link} from 'react-router';

class Home extends Component {
    render() {
        return (
            <div>   

     <div id="index-banner" className="parallax-container">
            <div className="parallax">
                <p> home.js</p>
                <img src='/images/ht1.jpg' alt="Unsplashed background img 1"/>
            </div>
            {/* <img src='/images/ht1.jpg' alt="Unsplashed background img 1"/> */}
            <div className="section no-pad-bot">

                <div className="container">
     
                    <h1 className="header center teal-text text-lighten-2">Welcome</h1>
                    <div className="row center">
                    <h5 className="header col s12 light">The Home of Something</h5>
                    </div>
                    
                    <div className="row center">
                        <button id="blog" className="btn-large waves-effect waves-light teal lighten-1"><Link to = "/blog"> Blog </Link> </button>
                    
                    </div>

                </div>
            </div>

    </div>  

<div className="container">
    <div className="section">

      <div className="row">
        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
            <h5 className="center">Home Automation</h5>

            <p className="light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
            <h5 className="center">Home Computing</h5>

            <p className="light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
            <h5 className="center">Mobile</h5>

            <p className="light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
          </div>
        </div>
      </div>

    </div>
  </div>


  <div className="parallax-container valign-wrapper">
    <div className="section no-pad-bot">
      <div className="container">
        <div className="row center">
          <h5 className="header col s12 light">More Information Here</h5>
        </div>
      </div>
    </div>
    <div className="parallax"><p>image here</p><img src="./img/background2.jpg" alt="Unsplashed background img 2"/></div>
  </div>

  <div className="container">
    <div className="section">

      <div className="row">
        <div className="col s12 center">
          <h3><i className="mdi-content-send brown-text"></i></h3>
          <h4>More Stuff Here</h4>
          <p className="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
        </div>
      </div>

    </div>
  </div>
       
            </div>
         )
    }
}

export default Home;