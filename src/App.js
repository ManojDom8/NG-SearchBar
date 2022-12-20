import React, { useState } from 'react';
import './style.css';
import SearchBar from './SearchBar/SearchBar.js';
export default function App() {
  const [SearchText, setSearchText] = useState('');
  function OnchangeSearchTextHandler(OnchangeSearchInput) {
    setSearchText(OnchangeSearchInput);
  }
  return (
    <div>
      <h1>Simple Searchbox!</h1>
      <SearchBar
        Width={'250px'}
        TotalCount={0}
        OnchangeSearchText={OnchangeSearchTextHandler}
        SearchText="Search"
      />
      <br />
      <br />
      <label>Search text :</label> {SearchText}
    </div>
  );
}
