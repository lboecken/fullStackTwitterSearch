import './Tweet.css';

function Tweet(props) {
  return (
    <div className='tweet'>
      <div className='userInfo'>
        <img alt='blank'></img>
        <h3 className='name'>{props.name}</h3>
        <div className='handle'>{props.handle}</div>
      </div>
      <div className='tweetBody'>{props.body}</div>
      <div className='tweetInfo'>
        <div className='time'>{props.time}</div>
        <div className='date'>{props.date}</div>
        <div className='source'>{props.source}</div>
      </div>
      <div className='tweetMetrics'>
        <div className='comments'>{props.comments}</div>
        <div className='retweets'>{props.retweets}</div>
        <div className='likes'>{props.likes}</div>
      </div>
    </div>
  );
}

export default Tweet;
