import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";
import { RootRoute } from "./app-routes";
import context from "../context/context";
import { getTheme } from "../styles/theme";
import { StatusBar } from "expo-status-bar";
import AppNavigator from "./AppNavigator";
import { SafeAreaView } from "react-native";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

const { useAppContext } = context;

export type RootStackParamList = {
  [RootRoute.AUTH]: undefined;
  [RootRoute.APP]: undefined;
};

const Screens: FC = () => {
  const {
    state: { theme, token },
  } = useAppContext();

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <StatusBar style="auto" />
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer ref={AppNavigator.navigationRef}>
          {token ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default Screens;
