export type ResponseResult<Data> = {
  data?: Data;
  error?: Error;
};

type FetchData<Data> = Promise<ResponseResult<Data>>;

export async function fetchData<Data>(endpoint: string): FetchData<Data> {
  let error;
  const data = await fetch(`https://api.renshuu.org/v1/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`Response: ${response.status}`);
    })
    .catch((err) => {
      error = err;
    });

  return {
    data,
    error,
  };
}
