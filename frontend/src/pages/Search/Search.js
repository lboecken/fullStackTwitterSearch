import React, { useState } from 'react';
import Input from './Input';
import { Results } from '../../components/components';
import './Search.css';

const sampleQuery = [
  {
    name: 'John Doe',
    handle: '@JohnDoe',
    body: 'my name is John Doe',
    time: '4pm',
    date: '8/7/1995',
    source: 'iPhone',
    comments: '5 comments',
    retweets: '6 retweets',
    likes: '3 likes',
  },
  {
    name: 'John Doe',
    handle: '@JohnDoe',
    body: 'my name is John Doe',
    time: '4pm',
    date: '8/7/1995',
    source: 'iPhone',
    comments: '5 comments',
    retweets: '6 retweets',
    likes: '3 likes',
  },
  {
    name: 'John Doe',
    handle: '@JohnDoe',
    body: 'my name is John Doe',
    time: '4pm',
    date: '8/7/1995',
    source: 'iPhone',
    comments: '5 comments',
    retweets: '6 retweets',
    likes: '3 likes',
  },
  {
    name: 'John Doe',
    handle: '@JohnDoe',
    body: 'my name is John Doe',
    time: '4pm',
    date: '8/7/1995',
    source: 'iPhone',
    comments: '5 comments',
    retweets: '6 retweets',
    likes: '3 likes',
  },
  {
    name: 'John Doe',
    handle: '@JohnDoe',
    body: 'my name is John Doe',
    time: '4pm',
    date: '8/7/1995',
    source: 'iPhone',
    comments: '5 comments',
    retweets: '6 retweets',
    likes: '3 likes',
  },
  {
    name: 'John Doe',
    handle: '@JohnDoe',
    body: 'my name is John Doe',
    time: '4pm',
    date: '8/7/1995',
    source: 'iPhone',
    comments: '5 comments',
    retweets: '6 retweets',
    likes: '3 likes',
  },
  {
    name: 'Jane Doe',
    handle: '@JohnDoe',
    body: 'my name is John Doe',
    time: '4pm',
    date: '8/7/1995',
    source: 'iPhone',
    comments: '5 comments',
    retweets: '6 retweets',
    likes: '3 likes',
  },
];

function Search() {
  const [queryResults, setQueryResults] = useState(sampleQuery);

  return (
    <div className='searchTwitter'>
      <h1 className='title'>Search Page</h1>
      <Input setQueryResults={setQueryResults} />
      <Results tweets={queryResults.data} />
    </div>
  );
}

export default Search;
