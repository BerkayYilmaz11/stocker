import { Theme } from "../typings";
import color from "./colors";

const LIGHT_THEME: Theme = {
  PRIMARY_BACKGROUND_COLOR: color.light,
  PRIMARY_BUTTON_COLOR: color.primary,
  PRIMARY_TEXT_COLOR: color.dark,
  SECONDARY_BUTTON_COLOR: color.secondary,
  SECONDARY_TEXT_COLOR: color.light,
  CHART_COLOR_PRIMARY: color.primary,
  CHART_COLOR_SECONDARY: color.red,
};

const DARK_THEME: Theme = {
  PRIMARY_BACKGROUND_COLOR: color.dark,
  PRIMARY_BUTTON_COLOR: color.secondary,
  PRIMARY_TEXT_COLOR: color.light,
  SECONDARY_BUTTON_COLOR: color.primary,
  SECONDARY_TEXT_COLOR: color.dark,
  CHART_COLOR_PRIMARY: color.dark,
  CHART_COLOR_SECONDARY: color.red,
};

const THEMES = {
  light: LIGHT_THEME,
  dark: DARK_THEME,
};

const getTheme = (theme: "light" | "dark") => {
  return THEMES[theme];
};

export { getTheme };
