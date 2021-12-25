import { ResultAsync } from "neverthrow";
import { StockDetailDTO, StockDTO } from "../DTO";
import http from "./http";
import mapper from "../mapper";
import { Endpoints } from "../typings";

const onError = (error: unknown) => {
  return error;
};

export interface LoginApiParams {
  username: string;
  password: string;
}

const login = (params: LoginApiParams) => {
  const request = http.post<any>("auth/login", params);
  return ResultAsync.fromPromise(request, onError).map<any>(
    (res) => res.data.access_token
  );
};

const stocks = () => {
  const request = http.get<StockDTO[]>("stocks");
  return ResultAsync.fromPromise(request, onError).map(({ data }) =>
    mapper.mapStock(data)
  );
};

const stockDetails = (params: { stockId: number }) => {
  const request = http.get<StockDetailDTO>(`stockDetails/${params.stockId}`);
  return ResultAsync.fromPromise(request, onError).map(({ data }) => {
    return mapper.mapStockDetail(data);
  });
};

const api = {
  [Endpoints.LOGIN]: login,
  [Endpoints.STOCK_LIST]: stocks,
  [Endpoints.STOCK_DETAILS]: stockDetails,
};

export default api;
