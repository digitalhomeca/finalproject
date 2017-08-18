import React, {Component} from 'react';
import axios from 'axios'

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
            <img src={post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url} />
            <h3> {post.title.rendered} </h3>
            <p><strong>Date</strong> {post.date.substring(0,10)}</p>
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