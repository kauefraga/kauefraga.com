import axios from 'axios';
import useSWR from 'swr';

export function useFetch<Data = any>(url: string) {
  const { data, error } = useSWR<Data>(url, async url => {
    const data = await axios.get(url)
      .then(res => res.data);

    return data;
  });

  return {
    data,
    error
  };
}
