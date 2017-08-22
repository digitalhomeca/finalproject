import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment'

class Blog extends Component {
    constructor(){
        super();
        this.state={
            blogposts:[],
            showError: false
        }
        
    }
    componentWillMount() {
        // const promise = axios.get('http://localhost:8080/posts')
        const promise = axios.get('http://digitalhomecanada.com/blog/wp-json/wp/v2/posts?_embed')
        
        promise.then((result) => {
          console.log(result.data);
          this.setState({
            blogposts: result.data,
            showError: false
        }) })
    
        .catch(error => {
          console.log(error);
          this.setState({
            showError: true
        });
    })   
}

    render() {
        document.title = "Digital Home Blog";

        let bloglist;

        if (this.state.blogposts.length > 0) {

             bloglist = this.state.blogposts.map((post,i) => {
                return <div key={post.index}>
                <h3> {post.title.rendered} </h3>
                <p>{moment(post.date).format( "MMMM DD YYYY")} </p>
                <div>
                    <img className='responsive-img' src={post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url}  />
                </div>
                <div className="section flow-text" dangerouslySetInnerHTML={ {__html: post.content.rendered} } /></div>
            }); 

         } else {
              
            bloglist = 
            <div className="ht-indent preloader-wrapper big active">
            <div className="spinner-layer spinner-blue-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
        }




        return (
            <div className="container">
            <h4 >The CMS Blog</h4>
                <div className="row">  
                <div className="divider"></div>    
                    <div className="col s12 m12 l12 "> 
                        {bloglist}
                    </div>
                    
                </div>

            </div>
          )
        }
        }
        


export default Blog;