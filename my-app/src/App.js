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
   this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      console.log(movie)
      return <Movie 
      title={movie.title} 
      poster={movie.medium_cover_image} 
      key={movie.id} 
      genres={movie.genres}
      synopsis={movie.synopsis}
      /> 
    })
    return movies
  }

   _getMovies = async () => {
    //비동기적인 함수이다. 이전 작업이 끝나야 그 다음 작업이 시작하는 형태가 아닌 것이다. 
    const movies = await this._callApi() //callApi 를 await mode 에서 movies 는 값으로 가지고 있음 
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch("https://yts.mx/api/v2/list_movies.json?quality=3D?sort_by=rating")
    .then(response => response.json()) //위의 라인이 완료가 되면 여기에 적힌걸 수행해라 
    .then(json=> json.data.movies)
    .catch(err => console.log(err)) //만약 맨 위의 것이 에러가 생긴다면 에러를 출력해라. 
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
