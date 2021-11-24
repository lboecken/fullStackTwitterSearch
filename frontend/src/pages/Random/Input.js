import React from 'react';
import './Random.css';
import { fetchAPI } from '../../helpers.js';

function Input(props) {
  const getTweet = async (e) => {
    e.preventDefault();
    const query = await fetchAPI(e.currentTarget.value);
    const randomTweetIndex = Math.floor(Math.random() * query.data.length);
    const random_tweet = {
      data: [query.data[randomTweetIndex]],
    };
    props.setQueryResults(random_tweet);
  };

  const randomShowcaseUsers = [
    {
      value: 'from:chesscom',
      className: 'random__chess',
      profilePicSrc:
        'https://pbs.twimg.com/profile_images/1206960097412501504/Ic61D7tZ_normal.jpg',
      imgAltText: 'Search for Chess.com',
    },
    {
      value: 'from:dilbert_daily',
      className: 'random__dilbert',
      profilePicSrc:
        'https://pbs.twimg.com/profile_images/1128664840233525248/T3YNFtIt_normal.png',
      imgAltText: 'Search for Dilbert Tweets',
    },
    {
      value: 'from:DukeMBB',
      className: 'random__duke',
      profilePicSrc:
        'https://pbs.twimg.com/profile_images/1368372005926535168/qHtTlFDc_normal.jpg',
      imgAltText: "Search for Duke Men's Basketball",
    },
    {
      value: 'from:realclearnews',
      className: 'random__realClear',
      profilePicSrc:
        'https://pbs.twimg.com/profile_images/892834958414368768/gOd8REHP_normal.jpg',
      imgAltText: 'Search for Real Clear News',
    },
  ];
  return (
    <div>
      <form className='random'>
        {randomShowcaseUsers.map((userInfo) => {
          return (
            <button
              className={userInfo.className}
              value={userInfo.value}
              onClick={(e) => {
                getTweet(e);
              }}>
              <img src={userInfo.profilePicSrc} alt={userInfo.imgAltText} />
            </button>
          );
        })}
      </form>
    </div>
  );
}

export default Input;
