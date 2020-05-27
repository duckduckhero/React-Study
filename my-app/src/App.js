import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Your Name",
  "Lord of the Rings",
  "Your Lie in april",
  "Star Wars"
]

const movieImages = [
  "https://otakubrit.files.wordpress.com/2016/11/b2a0423bed98d99f1ea38ceda757ffd5.jpg",
  "https://otakubrit.files.wordpress.com/2016/11/b2a0423bed98d99f1ea38ceda757ffd5.jpg",
  "https://otakubrit.files.wordpress.com/2016/11/b2a0423bed98d99f1ea38ceda757ffd5.jpg",
  "https://otakubrit.files.wordpress.com/2016/11/b2a0423bed98d99f1ea38ceda757ffd5.jpg"
]

class App extends React.Component  {

  state = {
  }

  componentDidMount(){ //component가 render 성공적으로 되면 이게 실행됨 
    fetch("https://yts.mx/api/v2/list_movies.json?quality=3D?sort_by=rating")
    .then(response => response.json()) //위의 라인이 완료가 되면 여기에 적힌걸 수행해라 
    .then(json=> console.log(json))
    .catch(err => console.log(err)) //만약 맨 위의 것이 에러가 생긴다면 에러를 출력해라. 
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/> 
    })
    return movies
  }

  render() { 
  return (
    <div className="App">
     {this.state.movies ? this._renderMovies() : 'Loading'}
    </div>
  );
  }
}

export default App;
