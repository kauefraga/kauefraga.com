import { api } from "../providers/axios";

export const getName = async () => {
  return api.get<{ name: string }>("/hello").then((res) => res.data.name);
};
