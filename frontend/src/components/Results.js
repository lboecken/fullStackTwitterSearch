import React from 'react';
import './Results.css';
import Tweet from './Tweet';

function Results(props) {
  return (
    <div className='results'>
      {props.tweets.map((tweet) => {
        return (
          <Tweet
            name={tweet.name}
            handle={tweet.handle}
            body={tweet.body}
            time={tweet.time}
            date={tweet.date}
            source={tweet.source}
            comments={tweet.comments}
            retweets={tweet.retweets}
            likes={tweet.likes}
          />
        );
      })}
    </div>
  );
}

export default Results;
