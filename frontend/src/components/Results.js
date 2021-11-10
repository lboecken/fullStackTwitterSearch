import React from 'react';
import './Results.css';
import Tweet from './Tweet';

function Results(props) {
  console.log(props);
  return (
    <div className='results'>
      {props.tweets &&
        props.tweets.data.map((tweet) => {
          return (
            <Tweet
              key={tweet.id}
              profile_picture_url={tweet.user_info.profile_picture_url}
              name={tweet.user_info.name}
              handle={tweet.user_info.username}
              body={tweet.text}
              time={tweet.time}
              date={tweet.date}
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
