import React, { useState } from 'react';
import Input from './Input';
import { Results } from '../../components/components';
import './Search.css';

function Search() {
  const [queryResults, setQueryResults] = useState();

  return (
    <div className='searchTwitter'>
      <Input setQueryResults={setQueryResults} />
      <Results tweets={queryResults} />
    </div>
  );
}

export default Search;
