import React from 'react';
import Input from './Input';
import { Results } from '../../components/components';

function Search() {
  return (
    <div className='searchTwitter'>
      <h1>Search Page</h1>
      <Input />
      <Results />
    </div>
  );
}

export default Search;
