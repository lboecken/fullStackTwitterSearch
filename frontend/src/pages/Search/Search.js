import React, { useState } from 'react';
import Input from './Input';
import Dropdown from './RulesDropdown';
import { Results, Title } from '../../components/components';
import './Search.css';

function Search() {
  const [queryResults, setQueryResults] = useState();

  return (
    <div className='searchTwitter'>
      <Title pageHeading='Search' />
      <Dropdown />
      <Input setQueryResults={setQueryResults} />
      <Results tweets={queryResults} />
    </div>
  );
}

export default Search;
