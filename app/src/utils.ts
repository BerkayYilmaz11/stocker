import jwt_decode from "jwt-decode";
import storage from "./storage";
import { Token } from "./typings";

function checkTokenExpired(token?: string | null) {
  if (!token) return false;
  const { exp } = jwt_decode<Token>(token);
  const expireDate = exp * 1000 - 60000;
  return expireDate < new Date().getTime();
}

async function logout(clearToken?: () => void) {
  await storage.deleteToken();
  if (clearToken) clearToken();
}

function decimalSeperator(x: string): string {
  return x.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default { checkTokenExpired, logout, decimalSeperator };
