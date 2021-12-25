import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppNavigator from "./AppStack";
import { config } from "./config";
import Login from "../pages/Login";
import { RootRoute } from "./app-routes";

interface Props {
  initialRouteName: RootRoute.AUTH | RootRoute.APP;
}

export type RootStackParamList = {
  [RootRoute.AUTH]: undefined;
  [RootRoute.APP]: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const RootStack: FC<Props> = ({ initialRouteName }) => {
  console.log("Initial root name : ", initialRouteName);
  return (
    <Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name={RootRoute.AUTH} component={Login} options={config} />
      <Screen name={RootRoute.APP} component={AppNavigator} options={config} />
    </Navigator>
  );
};

export default React.memo(RootStack, (prev, next) => {
  return prev.initialRouteName !== next.initialRouteName;
});
