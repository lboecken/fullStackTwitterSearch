import React, { useState } from 'react';
import { Results, Title } from '../../components/components';
import Input from './Input';

function Random() {
  const [queryResults, setQueryResults] = useState();

  return (
    <div className='randomTweets'>
      <Title pageHeading='Random' />
      <Input setQueryResults={setQueryResults} />
      <Results className='random_tweet' tweets={queryResults} />
    </div>
  );
}
export default Random;
