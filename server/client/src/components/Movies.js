import React, { Component } from 'react';

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }
  componentDidMount() {
    let dataURL = "http://digitalhomecanada.com/blog/wp-json/wp/v2/movies?_embed";
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          movies: res
        })
        console.log(res);
      })
  }
  render() {
    document.title = "Movie Listing";

    let movies;

    if (this.state.movies.length > 0) {

      movies = this.state.movies.map((movie, index) => {
        return <div key={index}>
          <div >
            <h4 > {movie.title.rendered}</h4>
            <img className='responsive-img' src={movie._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url} />
          </div>
          <p><strong>Release Year:</strong> {movie.acf.release_year}</p>
          <p><strong>Rating:</strong> {movie.acf.rating}</p>

          <div className="section flow-text"><div dangerouslySetInnerHTML={{ __html: movie.acf.description }} /></div>

          <div className="divider"></div>
        </div>
      });
    } else {
      movies =
        <div>
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
          <div className='contentSpacer'></div>
        </div>
    }
    return (
      <div className="container">
        <h4 >Alternative Movies Blog</h4>
        <div className="row">
          <div className="divider"></div>
          <div className="col s12 m12 l12 "> {movies}</div>

        </div>

      </div>
    )
  }
}
export default Movies;