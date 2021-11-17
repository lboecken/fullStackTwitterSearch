import './Tweet.css';

function Tweet(props) {
  return (
    <div className='tweet' key={props.key}>
      <a
        href={`https://twitter.com/${props.handle}/status/${props.id}`}
        target='_blank'
        className='tweet__link'></a>
      <div className='tweet__userInfo'>
        <img
          src={props.profile_picture_url}
          alt='blank'
          className='tweet__userInfo__profilePicture'></img>
        <div>
          <h3 className='tweet__userInfo__name'>{props.name}</h3>
          <a
            className='tweet__userInfo__handle'
            href={`https://twitter.com/${props.handle}`}
            target='_blank'
            rel='noreferrer'>
            @{props.handle}
          </a>
        </div>
      </div>
      <p className='tweet__body'> {props.body}</p>
      <div className='tweet__media'>
        {props.media_urls &&
          props.media_urls.map((url) => {
            return (
              <img className='tweet__media__img' src={url} alt={url}></img>
            );
          })}
      </div>
      <hr />
      <div className='tweet__info'>
        <div className='tweet_info__date'>{props.date}</div>
        <div className='tweet_info__time'>{props.time}</div>
        <div className='tweet_info__source'>{props.source}</div>
      </div>
      <hr />
      <div className='tweet__metrics'>
        <div className='tweet__metrics__comments'>
          <strong>{props.comments}</strong> comments
        </div>
        <div className='tweet__metrics__retweets'>
          <strong>{props.retweets}</strong> retweets
        </div>
        <div className='tweet__metrics__likes'>
          <strong>{props.likes}</strong> likes
        </div>
      </div>
    </div>
  );
}

export default Tweet;
