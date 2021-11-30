import React from 'react';
import './Title.css';

function Title(props) {
  return (
    <div>
      <h1 className='Title'>{props.pageHeading}</h1>
    </div>
  );
}

export default Title;
