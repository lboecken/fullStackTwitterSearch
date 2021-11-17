import React, { useState } from 'react';
import './Search.css';
const axios = require('axios').default;

function Input(props) {
  const [searchParams, setSearchParams] = useState();
  const fetchAPI = async (e) => {
    e && e.preventDefault();
    const query = await axios.get('http://localhost:5000/api/search', {
      params: { query: searchParams },
    });
    props.setQueryResults(query);
  };

  return (
    <form onSubmit={fetchAPI} className='inputForm'>
      <input
        className='inputForm__input'
        onChange={(e) => {
          setSearchParams(e.target.value);
        }}
        type='text'
        placeholder='Search Twitter'
      />
    </form>
  );
}

export default Input;
