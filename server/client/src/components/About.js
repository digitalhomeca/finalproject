import React, {Component} from 'react';
class About extends Component {
    render() {
        document.title = "About Digital Home";
        return (
            
            <div className="container">
            <h4 className='ht-indent'>About </h4>
                <div className="row">  
                <div className="col s12 m12 l12 ">
                <div className="divider"></div>   

                <div className="row">
                <div className="col s12 m9 l8 ">
                <p>The purpose of this website is to provide visitors with a sample of a Single Page Application (SPA) written using the React Javascript library that connects to a headless content management system (CMS). The headless CMS, in our application, is the WordPress REST API.</p>
                    
                    <h5>SPA</h5>
                    
                    <p>A single-page application (SPA) is a web application or web site that fits on a single web page with the goal of providing a user experience similar to that of a desktop application. In an SPA, either all necessary code – HTML, JavaScript, and CSS – is retrieved with a single page load or the appropriate resources are dynamically loaded and added to the page as necessary, usually in response to user actions.</p>
                    
                    <h5>Headless CMS</h5>
                    
                    <p>A headless CMS is an excellent choice for organizations and developer who feel limited by the front-end restrictions of a standard CMS. Rich web apps, custom layouts, and JavaScript frameworks don't fit into the architecture of a CMS which exert significant control over how a website looks and operates. </p>

                    <p>A headless CMS is an excellent choice for organizations and developer who feel limited by the front-end restrictions of a standard CMS. Rich web apps, custom layouts, and JavaScript frameworks don't fit into the architecture of a CMS which exert significant control over how a website looks and operates. </p>
                    
                    <p>The benefits of such a headless CMS extend beyond just websites. By delivering content via an API, a headless API can deliver content anywhere, to any device. This means the same backend can deliver content to a website, web application, iOS app, Android app, or any other medium.</p>
                    
                    <p>We believe a headless CMS is great for a cost-effective, quick to development and implement cross-platform publishing solution. It makes publishers, designers, and developers happy, who in turn will provide great products for their users.</p>

                </div>

                <div className="col m3 l4 right hide-on-med-and-down center-align">
                    <h5>Specializing in</h5>
                    <img className='responsive-img aboutImage' src='/images/cms.jpg' />
                    <p>Custom Development</p>
                    <img className='responsive-img aboutImage' src='/images/wp.png' />
                    <p>WordPress</p>
                    <img className='responsive-img aboutImage' src='/images/joomla.png' />
                    <p>Joomla</p>

                </div>

                </div>
                </div>   
                </div>
            </div>
         )
    }
}

export default About;