import React, { useState } from 'react';
import { Results } from '../../components/components';
import Input from './Input';

function Random() {
  const [queryResults, setQueryResults] = useState();

  return (
    <div className='randomTweets'>
      <Input setQueryResults={setQueryResults} />
      <Results className='random_tweet' tweets={queryResults} />
    </div>
  );
}
export default Random;
