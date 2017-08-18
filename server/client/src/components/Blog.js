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

        let bloglist = this.state.blogposts.map((post,i) => {
            return <div key={post.index}>
            <h3> {post.title.rendered} </h3>
            <img src={post._embedded['wp:featuredmedia'][0].media_details.sizes['poseidon-thumbnail-large'].source_url}  />
            {/* <img 
            srcSet={post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url + ' 320w, ' + post._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url + ' 1024w, ' + post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url + ' 1920w' } /> */}
            
            <p>Published:  {moment(post.date).format( "MMMM DD YYYY")} </p>
            <div dangerouslySetInnerHTML={ {__html: post.content.rendered} } /></div>

          });
        return (
            <div>
              <h2>Blog</h2>
              {bloglist}
            </div>
          )
        }
        }
        
//         let bloglist = this.state.blogposts.map((post,i) => {
//             return (
//                 <Posts 
//                     title={post.title.rendered}
//                     story={post.content.rendered}
//                     date={post.content.date}
//                     />
//             )
//         })

//         return (

//             <div className='blist'>
//                 <h2>Blog Posts</h2>
//                 {bloglist}

//             </div>
//          )
//     }
// }


// class Posts extends Component {
//     render() {

//         return (
//             <div>
//             <h2>{this.props.title}</h2>
//             {this.props.story}
//             <p>{this.props.date}</p>
//             </div>
//         )
        


//     }
// }


export default Blog;