import React, { useState } from 'react';
import './Search.css';
import { fetchAPI } from '../../helpers.js';

function Input(props) {
  const [searchParams, setSearchParams] = useState();
  async function getTweets(e) {
    e.preventDefault();
    props.setQueryResults(await fetchAPI(searchParams));
  }

  return (
    <form onSubmit={(e) => getTweets(e)} className='inputForm'>
      <input
        className='inputForm__input'
        onChange={(e) => {
          setSearchParams(encodeURIComponent(e.target.value));
        }}
        type='text'
        placeholder='Search Twitter'
      />
    </form>
  );
}

export default Input;
