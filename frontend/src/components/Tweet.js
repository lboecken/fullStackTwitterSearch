import './Tweet.css';

function Tweet(props) {
  return (
    <div className='tweet' key={props.tweet.id}>
      <div className='tweet__userInfo'>
        <img
          src={props.tweet.user_info.profile_picture_url}
          alt='blank'
          className='tweet__userInfo__profilePicture'></img>
        <div>
          <h3 className='tweet__userInfo__name'>
            {props.tweet.user_info.name}
          </h3>
          <a
            className='tweet__userInfo__handle'
            href={`https://twitter.com/${props.tweet.user_info.username}`}
            target='_blank'
            rel='noreferrer'>
            @{props.tweet.user_info.username}
          </a>
        </div>
      </div>
      <p className='tweet__body'> {props.tweet.text}</p>
      <div className='tweet__media'>
        {props.tweet.media_urls &&
          props.tweet.media_urls.map((url) => {
            return (
              <img className='tweet__media__img' src={url} alt={url}></img>
            );
          })}
      </div>
      <hr className='tweet__break__sourceInfo' />
      <div className='tweet__sourceInfo'>
        <div className='tweet__sourceInfo__date'>{props.tweet.date}</div>
        <div className='tweet_sourceInfo__time'>{props.tweet.time}</div>
        <div className='tweet_sourceInfo__source'>{props.tweet.source}</div>
      </div>
      <hr />
      <div className='tweet__metrics'>
        <div className='tweet__metrics__comments'>
          <strong>{props.tweet.public_metrics.reply_count}</strong> comments
        </div>
        <div className='tweet__metrics__retweets'>
          <strong>{props.tweet.public_metrics.retweet_count}</strong> retweets
        </div>
        <div className='tweet__metrics__likes'>
          <strong>{props.tweet.public_metrics.like_count}</strong> likes
        </div>
      </div>
    </div>
  );
}

export default Tweet;
