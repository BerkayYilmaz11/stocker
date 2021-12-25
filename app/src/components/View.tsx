import styled from "styled-components/native";
import colors from "../styles/colors";
import { Color } from "../typings";

export interface ViewProps {
  bgColor?: keyof Color;
  borderColor?: keyof Color;
}

const View = styled.View.attrs<ViewProps>(() => ({}))<ViewProps>`
  ${({ bgColor, theme }) =>
    bgColor ? colors[bgColor] : theme.PRIMARY_BACKGROUND_COLOR}
`;
export default View;
