import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StockList from "../pages/StockList";
import StockDetail from "../pages/StockDetail";
import { config } from "./config";
import { AppRoute } from "./app-routes";
import Logout from "./Logout";
export type AppStackParamList = {
  [AppRoute.STOCK_LIST]: undefined;
  [AppRoute.STOCK_DETAIL]: { stockId: number };
  [AppRoute.MODAL]: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<AppStackParamList>();

const AppStack: FC = () => {
  return (
    <Navigator
      initialRouteName={AppRoute.STOCK_LIST}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerRight: () => <Logout />,
      }}
    >
      <Screen
        name={AppRoute.STOCK_LIST}
        component={StockList}
        options={{ ...config, title: "Stocks" }}
      />
      <Screen
        name={AppRoute.STOCK_DETAIL}
        component={StockDetail}
        options={{ ...config, title: "Stock Detail" }}
      />
    </Navigator>
  );
};

export default AppStack;
