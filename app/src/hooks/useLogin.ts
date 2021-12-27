import { useState } from "react";
import api, { LoginApiParams } from "../api/api";
import storage from "../storage";
import { Endpoints } from "../typings";

const loginApi = api[Endpoints.LOGIN];

function useLogin(setToken: any) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const login = (params: LoginApiParams) => {
    setError(undefined);
    setLoading(true);
    setTimeout(() => {
      loginApi(params)
        .match(
          async (res) => {
            setToken(res);
            await storage.setToken(res);
          },
          async (err) => setError(err as string)
        )
        .finally(() => setLoading(false));
    }, 1000);
  };

  return { login, loading, error };
}

export default useLogin;
