import React, { Component } from 'react';
import { Link } from 'react-router';




class Home extends Component {

  render() {
    document.title = 'Digital Home';

    return (
      <div className="container">

        {/* Section One with Beauty shot, title and call to action   */}

        <div id="index-banner" className="parallax-container">
          <div className="section no-pad-bot">
            <div className="container">

              <h1 className="header center">New ways to Deliver</h1>
              <div className="row center">
                <h5 className="header col s12">Content Management Systems Yesterday and Today</h5>
              </div>
              <div className="row center">
                <Link to="/blog" id="download-button" className="btn-large waves-effect waves-light teal darken-1 white-text"> Introducing the Headless CMS </Link>
              </div>


            </div>
          </div>
          <div className="parallax"><img src="./images/wordpress.jpg" alt="Unsplashed background img 1" /></div>
        </div>

        {/* Section Two Outlines CMS systems */}
        <div className="section ">
          <div className="row flow-text center">
            Content management systems (CMS) are computer applications which support the creation and modification of digital content. The two most popular CMS systems in use on the web today are Joomla and WordPress.
          </div>
        </div>


        {/* Section Three is three column describing the CMS systems */}

        <div >
          <div className="section">

            <div className="row">
              <div className="col s12 m6 l6">
                <div className="icon-block">
                  <h2 className="center"><i className="material-icons">computer</i></h2>
                  <h5 className="center">Joomla</h5>

                  <p className="light">Joomla is a free and open-source content management system (CMS) written in PHP which began in 2001 as Mambo. As of November 2016, Joomla! has been downloaded over 81 million times. Joomla includes features such as page caching, RSS feeds, printable versions of pages, news flashes, blogs, search, and support for language internationalization.
</p>
                </div>
              </div>

              <div className="col s12 m6 l6">
                <div className="icon-block">
                  <h2 className="center"><i className="material-icons">computer</i></h2>
                  <h5 className="center">WordPress</h5>

                  <p className="light">First released in May 2003, WordPress is a free and open-source blogging system based on PHP and MySQL. Since its inception, WordPress has been updated over thirty times and is currently on version 4.9. WordPress is reportedly the most popular content management system on the Web, supporting more than 60 million websites.</p>

                </div>
              </div>


            </div>

          </div>
        </div>







        <div className="section">
          <div className="row">
            <div className="col s12 center">
              <h4 className="section">The Headless CMS</h4>
              <div className="section"><img className='responsive-img' src="./images/cms.png" alt="headless cms" /></div>
              <p className="left-align light">Over the last decade and a half, Joomla and WordPress have been the clear leaders in content management systems. They remain cheap to implement, easy to use and well supported. A massive install base combined with a league of dedicated developersvirtually guarantees they will remain the CMS leaders for years to come.</p><p className="left-align light">
                Unfortunately, while both Joomla and WordPress are industry leaders, they are beginning to show their age. Over a decade of code changes has left these once nimble content management systems a little worse for wear. The next step in the evolution of CMS systems is the separation of back and front ends and WordPress has been a leader in this area with the realease of its REST API. </p>
            </div>

          </div>
        </div>

        <div className="section container blue darken-3">
          <div className="row flow-text center cyan lighten-5">
            <blockquote> The headless CMS is ideal for developers hampered by the front-end restrictions of a traditional CMS and for publishers wanting a single source of content for mobile and traditional platforms.</blockquote>
          </div>
        </div>

        <div className="section">
          <div className="row ">
            <div className="col s12 center">
              <h4 className="section">The WordPress REST API</h4>
              <div className=" container section"><img className='responsive-img' src="./images/wp_rest_api.jpg" alt="headless cms" /></div>
              <p className="left-align light">The WordPress REST API turns the WordPress engine into a headless CMI by providing API endpoints that allow developers to interact with sites remotely by sending and receiving JSON (JavaScript Object Notation) objects. This enables developers to create, read and update WordPress content from client-side JavaScript applications, built using newer technologies like Angular or React, or from external applications such as mobile apps.</p>
              <h5 >The purpose of this site is to demonstrate the flexibility and power of the WordPress REST API.  </h5>
            </div>

          </div>
        </div>


      </div>
    )
  }
}

export default Home;