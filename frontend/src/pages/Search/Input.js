import React, { useState } from 'react';
import './Search.css';
const axios = require('axios').default;

function Input(props) {
  const [searchParams, setSearchParams] = useState();
  const fetchAPI = async (e) => {
    e && e.preventDefault();
    console.log(process.env);
    const query = await axios.get(
      'https://twitter-search-fullstack.herokuapp.com/api/search',
      {
        params: { query: searchParams },
      }
    );
    props.setQueryResults(query);
  };

  return (
    <form onSubmit={fetchAPI} className='inputForm'>
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
