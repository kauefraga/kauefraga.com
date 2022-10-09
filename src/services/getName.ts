import { api } from '../providers/axios';

interface IApiResponse {
  data: {
    name: string;
  };
}

export const getName = async () => {
  const response = await api.get<IApiResponse>('/hello').then((res) => res.data);

  return response.data.name;
};
