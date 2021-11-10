import React from 'react';
import './Results.css';
import Tweet from './Tweet';

function Results(props) {
  console.log(props);
  return (
    <div className='results'>
      {props.tweets.map((tweet) => {
        return (
          <Tweet
            name={tweet.user_info.name}
            handle={tweet.user_info.username}
            body={tweet.text}
            time={tweet.created_at}
            date={tweet.created_at}
            source={tweet.source}
            comments={tweet.public_metrics.reply_count}
            retweets={tweet.public_metrics.retweet_count}
            likes={tweet.public_metrics.like_count}
          />
        );
      })}
    </div>
  );
}

export default Results;
