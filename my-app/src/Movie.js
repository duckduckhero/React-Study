import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends React.Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string
    }

    render() {
        console.log(this.props);
    return (
     <div>
     <MoviePoster poster={this.props.poster}/>
     <h1>{this.props.title}</h1> 
     </div>
    )
  }
}


class MoviePoster extends React.Component {
    render() {
        console.log(this.props);
    return(
         <img src={this.props}/>
    )
    }
}
export default Movie



