import { Colors } from 'styles';

interface ColorTheme {
  primary: string;
  background: string;
  transparent: string;
  text: string;
  boderColor: string;
  error: string;
  placeHolderText: string;
  black: string;
  white: string;
  cardGray: string;
  titleGray: string;
  dashGray: string;
  disabledPayment: string;
}
export const DEFAULT_THEME: ColorTheme = {
  primary: Colors.PRIMARY,
  background: Colors.SECONDARY,
  text: Colors.SOFT_BLACK,
  boderColor: Colors.BORDER_COLOR,
  error: Colors.ERROR_RED,
  transparent: Colors.TRANSPARENT,
  placeHolderText: Colors.PLACEHOLDER_TEXT,
  black: Colors.BLACK,
  white: Colors.WHITE,
  cardGray: Colors.CARD_GRAY,
  titleGray: Colors.TITLE_GRAY,
  dashGray: Colors.LIGHT_GRAY,
  disabledPayment: Colors.DISABLED_GRAY,
};

// export const theme = {
//   text: {
//     primary: Colors.TEXT_PRIMARY,
//     secondary: Colors.TEXT_SECONDARY,
//     tertiary: Colors.TEXT_TERTIARY,
//     inverse: Colors.TEXT_INVERSE,
//     inversePrimary: Colors.ACTION_BACKGROUND_PRIMARY_DEFAULT,
//     actionTextPrimaryDefault: Colors.TEXT_ACTION_TEXT_PRIMARY_DEFAULT,
//     actionTextPrimaryDisable: Colors.TEXT_ACTION_TEXT_PRIMARY_DISABLE,
//     actionTextSecondaryActive: Colors.TEXT_ACTION_TEXT_SECONDARY_ACTIVE,
//     success: Colors.TEXT_SUCCESS,
//     error: Colors.TEXT_ERROR,
//     warning: Colors.TEXT_WARNING,
//     information: Colors.TEXT_INFORMATION,
//     black: Colors.BLACK,
//     white: Colors.WHITE,
//   },
//   background: {
//     primary: Colors.BACKGROUND_PRIMARY,
//     secondary: Colors.BACKGROUND_SECONDARY,
//     inverse: Colors.BACKGROUND_INVERSE,
//     disabled: Colors.BACKGROUND_DISABLED,
//     brandPrimary: Colors.BACKGROUND_BRAND_PRIMARY,
//     brandBlack: Colors.BACKGROUND_BRAND_BLACK,
//     actionPrimaryDefault: Colors.ACTION_BACKGROUND_PRIMARY_DEFAULT,
//     actionPrimaryHover: Colors.ACTION_BACKGROUND_PRIMARY_HOVER,
//     actionPrimaryDisable: Colors.ACTION_BACKGROUND_PRIMARY_DISABLE,
//     actionSecondary: Colors.ACTION_BACKGROUND_SECONDARY,
//     actionErrorHover: Colors.ACTION_BACKGROUND_ERROR_HOVER,
//     success: Colors.BACKGROUND_SUCCESS,
//     error: Colors.BACKGROUND_ERROR,
//     information: Colors.BACKGROUND_INFORMATION,
//     warning: Colors.BACKGROUND_WARNING,
//     black: Colors.BLACK,
//     white: Colors.WHITE,
//     transparent: Colors.TRANSPARENT,
//   },
//   border: {
//     primary: Colors.BORDER_PRIMARY,
//     secondary: Colors.BORDER_SECONDARY,
//     actionSecondaryDefault: Colors.ACTION_BORDER_SECONDARY_DDEFAULT,
//     actionSecondaryDisabled: Colors.ACTION_BORDER_SECONDARY_DISABLED,
//     actionSecondaryPressed: Colors.ACTION_BORDER_SECONDARY_PRESSED,
//     success: Colors.BORDER_SUCCESS,
//     error: Colors.BORDER_ERROR,
//     information: Colors.BORDER_INFORMATION,
//     warning: Colors.BORDER_WARNING,
//     black: Colors.BLACK,
//     white: Colors.WHITE,
//   },
//   content: {
//     primary: Colors.CONTENT_PRIMARY,
//     secondary: Colors.CONTENT_SECONDARY,
//     tertiary: Colors.CONTENT_TERTIARY,
//     inversePrimary: Colors.CONTENT_INVERSE_PRIMARY,
//     stateDisabled: Colors.CONTENT_STATE_DISABLED,
//     accent: Colors.CONTENT_ACCENT,
//     black: Colors.BLACK,
//     white: Colors.WHITE,
//   },
// };