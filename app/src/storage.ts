import AsyncStorage from "@react-native-async-storage/async-storage";

const setToken = async (token: string): Promise<void> => {
  AsyncStorage.setItem("auth_token", token);
};

const getToken = async (): Promise<string | null> => {
  return AsyncStorage.getItem("auth_token");
};

const deleteToken = async (): Promise<void> => {
  return AsyncStorage.removeItem("auth_token");
};

const setTheme = async (theme: "light" | "dark"): Promise<void> => {
  AsyncStorage.setItem("auth_token", theme);
};

const getTheme = async (): Promise<string | null> => {
  return AsyncStorage.getItem("theme");
};

const getInitialValues = async () => {
  const token = await getToken();
  const theme = await getTheme();
  return {
    token,
    theme,
  };
};

export default {
  setToken,
  getToken,
  deleteToken,
  getTheme,
  setTheme,
  getInitialValues,
};
