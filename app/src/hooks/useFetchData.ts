import { useEffect, useState } from "react";
import api from "../api/api";
import { Endpoints } from "../typings";
import context from "../context/context";
import { AUTH_ERROR } from "../constants";

const { useAppContext } = context;

function useFetchData<T>(
  endpoint: Endpoints,
  params?: any,
  onError?: () => void,
  onSuccess?: () => void
) {
  const { clearToken } = useAppContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);
  const [data, setData] = useState<T[]>([]);

  const onFetchError = (err: any) => {
    if (err === AUTH_ERROR) {
      clearToken();
    }
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
