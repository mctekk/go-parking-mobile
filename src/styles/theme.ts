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
