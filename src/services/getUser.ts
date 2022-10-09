import axios from 'axios';

export const getRandomUser = async () => {
  const response = await axios.get('https://randomuser.me/api/')
    .then((res) => {
      return res.data.results;
    });

  return response;
};
