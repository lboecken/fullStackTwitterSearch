import React from 'react';

function Input() {
  return (
    <form>
      <input
        type='text'
        placeholder='Search for your favorite tweets, @users, or #hashtags here...'
      />
      <button type='submit'>Search</button>
    </form>
  );
}

export default Input;
