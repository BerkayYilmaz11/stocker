import { useEffect, useState } from "react";
import api from "../api/api";
import { Endpoints } from "../typings";

function useFetchData<T>(
  endpoint: Endpoints,
  params?: any,
  onSuccess?: () => void,
  onError?: () => void
) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);
  const [data, setData] = useState<T[]>([]);

  const onFetchError = (err: any) => {
    setError(err);
    if (onError) onError();
  };

  const onFetchSuccess = (res: any) => {
    setData(res);
    if (onSuccess) onSuccess();
  };

  const fetch = () => {
    setTimeout(() => {
      api[endpoint](params)
        .match(onFetchSuccess, onFetchError)
        .finally(() => setLoading(false));
    }, 1000);
  };

  const refetch = () => {
    setLoading(true);
    setError(undefined);
    fetch();
  };

  useEffect(() => {
    fetch();
  }, [endpoint, JSON.stringify(params)]);

  return { loading, error, data, refetch };
}

export default useFetchData;
