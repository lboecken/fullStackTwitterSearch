import React from 'react';
const axios = require('axios').default;

function Input(props) {
  const fetchAPI = async (e) => {
    e && e.preventDefault();
    const query = await axios.get(
      'https://twitter-search-fullstack.herokuapp.com/api/search',
      {
        params: { query: e.target.value },
      }
    );
    const numOfResults = query.data.length;
    const random_tweet = {
      data: [query.data[Math.floor(Math.random() * numOfResults)]],
    };
    props.setQueryResults(random_tweet);
  };
  return (
    <div>
      <form>
        <button value='from:chesscom' onClick={(e) => fetchAPI(e)}>
          Chess.com
        </button>
        <button
          value='from:dilbert_daily'
          onClick={(e) => {
            fetchAPI(e);
          }}>
          Dilbert Daily
        </button>
        <button
          value='from:DukeMBB'
          onClick={(e) => {
            fetchAPI(e);
          }}>
          Duke Basketball
        </button>
        <button
          value='from:realclearnews'
          onClick={(e) => {
            fetchAPI(e);
          }}>
          RealClearNews
        </button>
      </form>
    </div>
  );
}

export default Input;
