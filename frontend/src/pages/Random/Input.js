import React from 'react';
import './Random.css';
const axios = require('axios').default;

function Input(props) {
  const fetchAPI = async (e) => {
    e && e.preventDefault();
    const query = await axios.get('/api/search', {
      params: { query: e.currentTarget.value },
    });
    const numOfResults = query.data.length;
    const random_tweet = {
      data: [query.data[Math.floor(Math.random() * numOfResults)]],
    };
    props.setQueryResults(random_tweet);
  };
  return (
    <div>
      <form className='random'>
        <button
          value='from:chesscom'
          onClick={(e) => fetchAPI(e)}
          className='random__chess'>
          <img
            value='from:chesscom'
            src='https://pbs.twimg.com/profile_images/1206960097412501504/Ic61D7tZ_normal.jpg'
            alt='Search for Chess.com'
          />
        </button>
        <button
          value='from:dilbert_daily'
          onClick={(e) => {
            fetchAPI(e);
          }}
          className='random__dilbert'>
          <img
            src='https://pbs.twimg.com/profile_images/1128664840233525248/T3YNFtIt_normal.png'
            alt='Search for Dilbert Tweets'
          />
        </button>
        <button
          value='from:DukeMBB'
          onClick={(e) => {
            fetchAPI(e);
          }}
          className='random__duke'>
          <img
            src='https://pbs.twimg.com/profile_images/1368372005926535168/qHtTlFDc_normal.jpg'
            alt="Search for Duke Men's Basketball"
          />
        </button>
        <button
          value='from:realclearnews'
          onClick={(e) => {
            fetchAPI(e);
          }}
          className='random__realClear'>
          <img
            src='https://pbs.twimg.com/profile_images/892834958414368768/gOd8REHP_normal.jpg'
            alt='Search for Real Clear News'
          />
        </button>
      </form>
    </div>
  );
}

export default Input;
