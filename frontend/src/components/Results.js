import React from 'react';
import './Results.css';
import Tweet from './Tweet';

function Results(props) {
  return (
    <div className='results'>
      {props.tweets &&
        props.tweets.data.map((tweet) => {
          return <Tweet tweet={tweet} />;
        })}
    </div>
  );
}

export default Results;
