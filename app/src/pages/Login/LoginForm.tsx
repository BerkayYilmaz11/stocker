import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { View, Button, Text } from "../../components";
import FormInput from "./FormInput";
import { Credentials } from "../../typings";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

interface LoginFormProps {
  onSubmit: (values: Credentials) => void;
  loading?: boolean;
  error?: string;
}

const LoginForm: FC<LoginFormProps> = ({ onSubmit, loading, error }) => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => onSubmit(values)}
        validationSchema={LoginSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View bgColor="red">
            <FormInput
              label="Username"
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
              style={styles.inputStyle}
              error={
                errors.username && touched.username
                  ? errors.username
                  : undefined
              }
            />
            <FormInput
              label="Password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              style={styles.inputStyle}
              error={
                errors.username && touched.username
                  ? errors.username
                  : undefined
              }
            />
            <Button
              onPress={(e: any) => handleSubmit(e)}
              text="Login"
              style={{ marginTop: 10, marginHorizontal: 10 }}
              disabled={loading}
              color="light"
            />
            {error && (
              <Text
                t={error}
                style={styles.errorText}
                bold
                size="md"
                color="red"
              />
            )}
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginHorizontal: 10,
  },
  inputStyle: {
    padding: 6,
    margin: 10,
  },
  errorText: {
    alignSelf: "center",
    marginTop: 10,
  },
});

export default LoginForm;
