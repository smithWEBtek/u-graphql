import React, { Component } from 'react';
import Movie from './Movie';
import MoviesData from './Movies.data';
import './Movies.css';

export default class Movies extends Component {
  state = {
    movies: MoviesData
  }

  render() {
    const renderedMovies = this.state.movies.map((movie, index) => {
      return (
        <Movie key={movie.id} name={movie.name} imageUrl={movie.imageUrl} />
      )
    })

    return (
      <div className="movies-container">
        {renderedMovies}
      </div>
    );
  }
}
