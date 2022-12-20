import React, { useEffect, useState, Component, useRef } from 'react';
import './SearchBar.css';
import Search_img from './Search.svg';
import Search_Cancel_img from './Search_Cancel.svg';
const Searchbar = (props) => {
  const [onchangeSearchText, setSearchText] = useState(props.searchText);
  var typingTimer; //timer identifier
  var doneTypingInterval = 2000;

  useEffect(() => {
    if (props.searchText !== undefined) {
      setSearchText(props.searchText);
    }
  }, [props]);

  function OnEnterSearch(event) {
    if (event.charCode === 13) {
      setSearchText(event.target.value);
      props.OnchangeSearchText(event.target.value);
    }
    console.log('OnEnterSearch');
  }

  const inputRef = useRef();

  const doneTyping = () => {
    props.OnchangeSearchText(onchangeSearchText);
  };

  function onSearchKeyUp() {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(doneTyping, doneTypingInterval);
  }

  const onSearchKeyDown = () => {
    clearTimeout(typingTimer);
  };

  function OnclearSearch(event) {
    setSearchText('');
    props.OnchangeSearchText('');
  }

  return (
    <div className="Search" style={{ width: props.Width }}>
      <input
        className="Search_Input tabable"
        value={onchangeSearchText}
        onChange={(event) => setSearchText(event.target.value)}
        onKeyUp={onSearchKeyUp}
        onKeyDown={onSearchKeyDown}
        id="input"
        title="search"
        onKeyPress={OnEnterSearch}
        autocomplete="off"
        spellCheck="true"
        placeholder={
          props.SearchText === undefined ? 'Search' : props.SearchText
        }
      />
      {onchangeSearchText ? (
        <span className="SearchIcon" onClick={OnclearSearch}>
          <SVG
            lassName="SearchIconStyle"
            alt={
              props.SearchText === undefined
                ? 'Cancel Search'
                : 'Cancel ' + props.SearchText
            }
            Srcpath={Search_Cancel_img}
          >
            {Option}
          </SVG>
        </span>
      ) : (
        <span className="SearchIcon">
          <SVG
            className="SearchIconStyle"
            alt={props.SearchText === undefined ? 'Search' : props.SearchText}
            Srcpath={Search_img}
          >
            {Option}
          </SVG>
        </span>
      )}
    </div>
  );
};

const SVG = (props) => {
  const { Srcpath, alt } = props;
  let alternateimgstring;
  if (alt) {
    alternateimgstring = alt;
  } else {
    alternateimgstring = 'image';
  }
  return <img src={props.Srcpath} alt={alternateimgstring} />;
};
export default Searchbar;
