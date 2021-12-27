import axios from "axios";
import { AUTH_ERROR, BASE_URL } from "../constants";
import storage from "../storage";
import { Endpoints } from "../typings";
import utils from "../utils";

export interface ApiResponse<T> {
  successful: boolean;
  errorCode: string;
  errorDetail: string;
  data: T;
}

const enum HttpMethod {
  GET = "get",
  POST = "post",
}

interface HttpResponse<T> {
  data: T;
}

async function request<T>(
  method: HttpMethod,
  endpoint: string,
  data?: {}
): Promise<any> {
  try {
    const url = `${BASE_URL}/${endpoint}`;
    const token =
      `/${endpoint}` !== Endpoints.LOGIN ? await storage.getToken() : undefined;
    if (utils.checkTokenExpired(token)) {
      return Promise.reject(AUTH_ERROR);
    }
    let res;
    if (method === HttpMethod.GET) {
      res = await axios({
        method,
        url,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } else {
      res = await axios.post(url, data);
    }
    return Promise.resolve({ data: res.data });
  } catch (error) {
    return Promise.reject(error.response.data.message);
  }
}

const get = <T>(endpoint: string): Promise<HttpResponse<T>> =>
  request(HttpMethod.GET, endpoint);
const post = <T>(endpoint: string, data?: any): Promise<HttpResponse<T>> =>
  request(HttpMethod.POST, endpoint, data);

export default { post, get };
