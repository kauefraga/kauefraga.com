import { api } from "../providers/axios";

interface ApiResponse {
  data: {
    name: string;
  };
}

export const getName = async () => {
  const res = await api.get<ApiResponse>("/hello").then((res) => res.data);

  return res.data.name;
};
