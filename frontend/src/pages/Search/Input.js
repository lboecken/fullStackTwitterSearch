import React, { useState } from 'react';
import './Search.css';
const axios = require('axios').default;

function Input() {
  const [searchParams, setSearchParams] = useState();
  const fetchAPI = async (e) => {
    e.preventDefault();
    const query = await axios.get('http://localhost:5000/api/search', {
      params: { query: searchParams },
    });
    console.log(query);
    return query;
  };

  return (
    <form onSubmit={fetchAPI} className='inputForm'>
      <input
        onChange={(e) => {
          setSearchParams(e.target.value);
        }}
        type='text'
        placeholder='Search for your favorite tweets, @users, or #hashtags here...'
      />
      <button type='submit'>Search</button>
    </form>
  );
}

export default Input;
