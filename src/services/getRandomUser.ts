import axios from 'axios';

export const getRandomUser = async () => {
  const response = await axios.get('https://randomuser.me/api/')
    .then(res => res.data.results);

  return response;
};
