import React from "react";
import { FC } from "react";
import { TextInputProps } from "react-native";
import { View, Text, TextInput } from "../../components";

interface Props extends TextInputProps {
  label: string;
  error?: string;
}

const FormInput: FC<Props> = (props) => {
  const { label, error } = props;
  return (
    <View>
      <Text
        t={label}
        style={{ fontWeight: "bold", marginLeft: 10 }}
        size="md"
      />
      <TextInput {...props} size="md" />
      {error && (
        <Text
          t={error}
          style={{ marginLeft: 10 }}
          size="md"
          color="secondary"
        />
      )}
    </View>
  );
};

export default FormInput;
