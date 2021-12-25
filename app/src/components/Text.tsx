import styled from "styled-components/native";
import colors from "../styles/colors";
import fontSizes from "../styles/fontSizes";
import { Color, FontSize } from "../typings";

export interface TextProps {
  color?: keyof Color;
  size?: keyof FontSize;
  bold?: boolean;
  alignment?: "left" | "right" | "center";
  t: string;
}

const Text = styled.Text.attrs<TextProps>(({ t }) => ({
  children: t,
}))<TextProps>`
  color: ${({ color, theme }) =>
    color ? colors[color] : theme.PRIMARY_TEXT_COLOR}
  fontSize: ${({ size = "sm" }) => fontSizes[size]}px
  fontWeight: ${({ bold }) => (bold ? "bold" : "400")}
  ${({ alignment }) => alignment && { textAlign: alignment }}
`;

export default Text;
