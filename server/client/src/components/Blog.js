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
        const promise = axios.get('http://localhost:8080/posts')
        
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
        let bloglist = this.state.blogposts.map((post,i) => {
            return (
                <Posts 
                    title={post.title.rendered}
                    story={post.content.rendered}
                    date={post.content.date}
                    />
            )
        })

        return (

            <div className='blist'>
                <h2>Blog Posts</h2>
                {bloglist}

            </div>
         )
    }
}


class Posts extends Component {
    render() {

        return (
            <div>
            <h2>{this.props.title}</h2>
            {this.props.story}
            <p>{this.props.date}</p>
            </div>
        )
        


    }
}


export default Blog;