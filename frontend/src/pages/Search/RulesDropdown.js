import React from 'react';

function Dropdown() {
  return (
    <div>
      <details className='rules'>
        <summary>Search Rules</summary>
        <p className='rules__description'>
          Welcome! Search Twitter allows you to search the last 6-9 days worth
          of tweets. Below are some rules you can use to find what you are
          looking for.
        </p>
        <table className='rules__table'>
          <thead>
            <tr>
              <th>Example</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#Braves</td>
              <td>Finds tweets with the hashtag Braves</td>
            </tr>
            <tr>
              <td>from:Braves</td>
              <td>Finds tweets sent by @Braves</td>
            </tr>
            <tr>
              <td>to:Braves</td>
              <td>Finds tweets sent to @Braves</td>
            </tr>
            <tr>
              <td>@Braves</td>
              <td>Finds tweets mentioning @Braves</td>
            </tr>
            <tr>
              <td>Braves</td>
              <td>Finds tweets containing 'Braves' anywhere</td>
            </tr>
            <tr>
              <td>to:Braves</td>
              <td>Finds tweets sent to @Braves</td>
            </tr>
            <tr>
              <td>"Braves"</td>
              <td>
                Finds tweets containing exactly "Braves". NOTE: requires double
                quotes.
              </td>
            </tr>
          </tbody>
        </table>
      </details>
    </div>
  );
}

export default Dropdown;
