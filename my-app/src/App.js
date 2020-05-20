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

const movies = [
  {
    title : "Your Name",
    poster : "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fdgcuvl%2FbtqDOkOM8ti%2FJYmZXgz1T5K6i4Ch3gIQs1%2Fimg.jpg"
  },

  {
    title : "Lord of the Rings",
    poster:  "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fdgcuvl%2FbtqDOkOM8ti%2FJYmZXgz1T5K6i4Ch3gIQs1%2Fimg.jpg"
  },

  {
    title : "Your Lie in april",
    poster : "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fdgcuvl%2FbtqDOkOM8ti%2FJYmZXgz1T5K6i4Ch3gIQs1%2Fimg.jpg"
  },

  {
    title : "Star Wars",
    poster: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fdgcuvl%2FbtqDOkOM8ti%2FJYmZXgz1T5K6i4Ch3gIQs1%2Fimg.jpg"
  }

]

class App extends React.Component  {

  state = {
    greeting: 'Hello!'
  }

  componentDidMount(){ //component가 render 성공적으로 되면 이게 실행됨 
    setTimeout(() => { 
      this.setState(
        {
          greeting: 'Hello Again'
        }
      )
    }, 5000)
  }

  render() {
  return (
    <div className="App">
      {this.state.greeting}
     {movies.map((movie, index) => {
       return <Movie title={movie.title} poster={movie.poster} key={index}/> 
     })}
    </div>
  );
  }
}

export default App;
