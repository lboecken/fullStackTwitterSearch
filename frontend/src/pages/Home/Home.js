import React, { useEffect, useState } from 'react';
import { Results, Title } from '../../components/components';
import { fetchAPI } from '../../helpers';

function Home() {
  const [tweets, setTweets] = useState();
  const searchParams =
    'from:adammgrant OR from:shenegotiates OR from:dailymuse OR from:harvardbiz OR from:levoleague OR from:forbes OR from:careerbuilder OR from:lifehacker OR from:learnvest OR from:productivityist OR from:susanmcp1 OR from:tfdiet OR from:creditexperts OR from:npr OR from:ap OR from:theeconomist OR from:nxthompson OR from:emilynussbaum ismashfizzle OR from:lin_manuel OR from:niemanlab OR from:maggienyt OR from:markknoller OR from:pbump';
  useEffect(async () => {
    setTweets(await fetchAPI(searchParams));
  }, []);
  return (
    <div className='home'>
      <Title pageHeading='Home' />
      <Results tweets={tweets} />
    </div>
  );
}

export default Home;
