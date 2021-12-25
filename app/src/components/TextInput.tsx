import React, { useImperativeHandle, useState } from "react";
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import styled from "styled-components/native";
import colors from "../styles/colors";
import fontSizes from "../styles/fontSizes";
import { Color, FontSize } from "../typings";

export interface TextInputProps extends RNTextInputProps {
  borderColor?: keyof Color;
  placeholder?: string;
  bgColor?: keyof Color;
  color?: keyof Color;
  size?: keyof FontSize;
}

const TextInput = React.forwardRef<unknown, TextInputProps>((props, ref) => {
  const [text, setText] = useState(props.value || "");

  const onChangeText = (changedText: string) => {
    setText(changedText);
    if (props.onChangeText) props.onChangeText(changedText);
  };

  return <RNTextInput {...props} value={text} onChangeText={onChangeText} />;
});

const StyledTextInput = styled(TextInput).attrs<TextInputProps>(
  ({ placeholder }) => ({
    placeholder: placeholder,
    autoCapitalize: "none",
  })
)<TextInputProps>`
  borderWidth: 2px
  borderRadius: 4px
  backgroundColor: ${({ theme, bgColor }) =>
    (bgColor && colors[bgColor]) || theme.PRIMARY_BACKGROUND_COLOR}
  paddingVertical: 10px
  paddingHorizontal: 15px
  fontSize: ${({ size = "sm" }) => fontSizes[size]}px
  color: ${({ color, theme }) =>
    (color && colors[color]) || theme.PRIMARY_TEXT_COLOR}
`;

export default StyledTextInput;
