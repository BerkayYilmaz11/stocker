import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootRoute } from "./app-routes";
import Login from "../pages/Login";
import { config } from "./config";
export type AuthParamList = {
  [RootRoute.AUTH]: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<AuthParamList>();

const AuthStack: FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name={RootRoute.AUTH} component={Login} options={config} />
    </Navigator>
  );
};

export default AuthStack;
