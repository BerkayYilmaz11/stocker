import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";
import context from "../context/context";
import { getTheme } from "../styles/theme";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { AppNavigator, AppStack, AuthStack } from "../navigation";

const { useAppContext } = context;

const Pages: FC = () => {
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

export default Pages;
