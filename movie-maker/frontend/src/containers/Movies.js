import React, { Component } from 'react';
import Movie from './Movie';
import MoviesData from './Movies.data';

export default class Movies extends Component {
  state = {
    movies: MoviesData
  }

  render() {
    const renderedMovies = this.state.movies.map(movie => {
      return (
        <Movie
          key={movie.id}
          name={movie.name}
          genre={movie.genre}
          year={movie.year}
          imageUrl={movie.imageUrl}
        />
      )
    })

    return (
      <div className="movies-container">
        {renderedMovies}
      </div>
    );
  }
}
