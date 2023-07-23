import React from 'react'
import { useState } from 'react'; 
import './SearchBar.css';

const SearchBar = ( { onSubmit } ) => {
  const [ term, setTerm ] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm( event.target.value );
  };

  return (
    <div className="search-bar">
      <form onSubmit={ handleFormSubmit }>
        <label htmlFor="">Enter search term</label>
        <input type="text" value={ term } onChange={ handleChange }/>
      </form>
    </div>
  )
}

export default SearchBar