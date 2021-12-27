import React, { FC } from "react";
import { StyleSheet } from "react-native";
import context from "../../context/context";
import LoginForm from "./LoginForm";
import useLogin from "../../hooks/useLogin";
import { View, Text } from "../../components";
import useKeyboardVisible from "../../hooks/useKeyboardVisible";
import { LoginApiParams } from "../../api/api";

const { useAppContext } = context;

const Login: FC = () => {
  const { setToken } = useAppContext();

  const { login, error, loading } = useLogin(setToken);

  const keyboardVisible = useKeyboardVisible();

  const onSubmitForm = (values: LoginApiParams) => {
    login(values);
  };

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
