import React from 'react';
import './Movie.css';

const Movie = (props) => {
  return (
    <div key={props.name} className="movie" >
      <img src={props.imageUrl} alt={`${props.name} poster`} />
      <p>{props.name}</p>
    </div>
  );
}

export default Movie;
