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
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title : "Your Name",
            poster: "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/108j/image/XVs44-ADN8SgrjZrgC9haVGk674.jpg"
          },
        
          {
            title : "Lord of the Rings",
            poster: "https://www.denofgeek.com/wp-content/uploads/2014/12/lord-of-the-rings-greatest-moments.jpg?fit=1920%2C1080"
          },
        
          {
            title : "Your Lie in april",
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHEkrhWYjoTbuFwUjq5PjjHtEstTZ1PTPWc32UejwN8fo4xGV_&usqp=CAU"
          },
        
          {
            title : "Star Wars",
            poster:  "https://i.ytimg.com/vi/sFvQOc4xS2k/maxresdefault.jpg"
          },
    
          {
            title: "Kingdom",
            poster: "https://menu.mt.co.kr/ize/thumb/2020/02/06/2020020618377210711_1.jpg?222?rnd=1152"
          }
        ]
      })
    }, 5000)
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
