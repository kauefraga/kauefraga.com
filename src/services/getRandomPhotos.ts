import axios from 'axios';

export const getRandomPhotos = async () => {
  const response = await axios.get('https://picsum.photos/v2/list')
    .then(res => res.data);

  return response;
};
