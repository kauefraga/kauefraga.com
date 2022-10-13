import axios from 'axios';

export interface IPhoto {
  id: number;
  author: string;
  width: number;
  height: number;
  download_url: string;
}

export const getRandomPhotos = async () => {
  const response = await axios.get<IPhoto[]>('https://picsum.photos/v2/list')
    .then(res => res.data);

  return response;
};
