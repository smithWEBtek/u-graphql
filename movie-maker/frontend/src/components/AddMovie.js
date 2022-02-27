import React from 'react';

const AddMovie = (props) => {
  return (
    <div className="addMovie">
      <form onSubmit={() => alert('movie added')} >
        <label>Name</label>
        <input type="text" required />

        <label>Genre</label>
        <input type="text" required />

        <label>Year</label>
        <input type="text" placeholder="(optional)" />

        <button type="submit">Add movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
