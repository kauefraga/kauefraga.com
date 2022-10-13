import axios from 'axios';

export interface IRepo {
  id: number;
  name: string,
  description: string,
  html_url: string,
}

export const getRepos = async () => {
  const response = await axios.get<IRepo[]>('https://api.github.com/users/kauefraga/repos')
    .then(res => res.data);

  return response;
};
