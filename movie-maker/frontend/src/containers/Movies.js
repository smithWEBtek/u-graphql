import React from 'react';
import { gql } from "@apollo/client";
// import graphql from 'react-apollo';
import { graphql } from 'graphql';
// import Movie from './Movie';

// import MoviesData from './Movies.data';

const allMovies = gql`
  {
    movies {
      name
      genre
      year
      imageUrl
    }
  }
`
const Movies = (props) => {

  // console.log('props: ', props);
  console.log('allMovies: ', allMovies);
    // debugger

    // const renderedMovies = this.state.movies.map(movie => {
    // const renderedMovies = allMovies.map(movie => {
    //   return (
    //     <Movie
    //       key={movie.id}
    //       name={movie.name}
    //       genre={movie.genre}
    //       year={movie.year}
    //       imageUrl={movie.imageUrl}
    //     />
    //   )
    // })

    return (
      <div className="movies-container">
        <h1>ASDF ZXCV</h1>
      </div>
    );
  }

export default Movies;
// export default graphql(Movies);
