import { RootRoute } from "./navigation/app-routes";
import { CommonColor } from "./styles/colors";
import { CommonFontSize } from "./styles/fontSizes";

export type Color = CommonColor;
export type FontSize = CommonFontSize;

export interface Theme {
  PRIMARY_BACKGROUND_COLOR: string;
  PRIMARY_BUTTON_COLOR: string;
  PRIMARY_TEXT_COLOR: string;
  SECONDARY_BUTTON_COLOR: string;
  SECONDARY_TEXT_COLOR: string;
  CHART_COLOR_PRIMARY: string;
  CHART_COLOR_SECONDARY: string;
}

export type initialRoute = RootRoute.AUTH | RootRoute.APP;

export type AppState = {
  token?: string | null;
  theme: "light" | "dark";
};

export type UserActionType = "setToken" | "setTheme" | "initialize";

export type UserAction = {
  type: UserActionType;
  data: AppState;
};

export interface Stock {
  id: number;
  currentPrice: string;
  code: string;
  name: string;
  shares: string;
}

export type ChartData = {
  prices: number[];
  labels: string[];
};

export interface StockData extends Stock {
  data: ChartData;
  description: string;
  marketValue: number;
}

export type Token = {
  exp: number;
  username: string;
};

export type Credentials = {
  username: string;
  password: string;
};

export enum Endpoints {
  LOGIN = "/auth/login",
  STOCK_LIST = "/stocks",
  STOCK_DETAILS = "/stockDetails",
}

export enum AppPlatform {
  ANDROID = "android",
  IOS = "ios",
}
