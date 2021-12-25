import React, { FC } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import context from "../../context/context";
import LoginForm from "./LoginForm";
import { RootStackParamList } from "../../navigation/RootStack";
import { RootRoute } from "../../navigation/app-routes";
import useLogin from "../../hooks/useLogin";
import { View, Text } from "../../components";
import useKeyboardVisible from "../../hooks/useKeyboardVisible";
import { LoginApiParams } from "../../api/api";

const { useAppContext } = context;

type Props = NativeStackScreenProps<RootStackParamList, RootRoute.AUTH>;

const Login: FC<Props> = ({ navigation }) => {
  const { setToken } = useAppContext();

  const { login, success, error, loading } = useLogin(setToken);

  const keyboardVisible = useKeyboardVisible();

  const onSubmitForm = (values: LoginApiParams) => {
    login(values);
  };

  if (success) {
    navigation.navigate(RootRoute.APP);
  }

  return (
    <View style={styles.container}>
      {!keyboardVisible && (
        <View style={styles.logoContainer}>
          <Text t="Stocker" bold color="primary" style={styles.logoText} />
          <Text
            t="Where you stalk your investment..."
            bold
            size="xl"
            color="dark"
          />
        </View>
      )}
      <View style={styles.content}>
        <LoginForm onSubmit={onSubmitForm} loading={loading} error={error} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoText: {
    fontSize: 40,
    lineHeight: 50,
    marginBottom: 15,
  },
  container: {
    flex: 1,
    marginTop: 15,
  },
  logoContainer: {
    marginTop: 80,
    marginBottom: 20,
    marginLeft: 20,
  },
  content: {
    flex: 1,
    marginTop: 40,
    borderTopRightRadius: 40,
  },
});

export default Login;
