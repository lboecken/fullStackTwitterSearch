import axios from 'axios';

export async function fetchAPI(searchParams) {
  const query = await axios.get('api/search', {
    params: { query: searchParams },
  });
  return query;
}
