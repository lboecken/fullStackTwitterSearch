import React, { useState } from 'react';
import { Results } from '../../components/components';
import Input from './Input';

function Random() {
  const [queryResults, setQueryResults] = useState();

  return (
    <div className='randomTweets'>
      <h1 className='title'>Random</h1>
      <Input setQueryResults={setQueryResults} />
      <Results tweets={queryResults} />
    </div>
  );
}
export default Random;
