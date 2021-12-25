import { throttle } from "lodash";
import React from "react";
import { TouchableOpacityProps } from "react-native";
import styled, { DefaultTheme } from "styled-components/native";
import { Color } from "../typings";
import { THROTTLE_PERIOD } from "../constants";

import Text from "./Text";
import colors from "../styles/colors";

type Type = "primary" | "secondary";

export interface ButtonProps extends TouchableOpacityProps {
  color?: keyof Color;
  type?: Type;
  bgColor?: keyof Color;
  borderColor?: keyof Color;
  disabled?: boolean;
  onPress: (e?: any) => void;
  text: string;
}

const renderChildren = (props: ButtonProps) => {
  const { color, text } = props;

  return <Text color={color} t={text.toUpperCase()} size="md" />;
};

const getBgColorByType = (type: Type, theme: DefaultTheme) => {
  return type === "primary"
    ? theme.PRIMARY_BUTTON_COLOR
    : theme.SECONDARY_BUTTON_COLOR;
};

const StyledButton = styled.TouchableOpacity.attrs<ButtonProps>((props) => ({
  activeOpacity: 0.8,
  onPress: throttle(props.onPress, THROTTLE_PERIOD, {
    trailing: false,
  }),
  children: renderChildren(props),
}))<ButtonProps>`
  minHeight: 50px
  borderRadius: 16px
  justifyContent: center
  alignItems: center
  padding: 10px
  backgroundColor: ${({ type = "primary", bgColor, theme }) =>
    bgColor ? colors[bgColor] : getBgColorByType(type, theme)}
  ${({ disabled }) => disabled && { opacity: 0.5 }}
`;

export default StyledButton;
