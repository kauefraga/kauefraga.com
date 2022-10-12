import axios from 'axios';

export const getRepos = async () => {
  const response = await axios.get('https://api.github.com/users/kauefraga/repos')
    .then(res => res.data);

  return response;
};
