import { Dimensions, Platform, StatusBar } from 'react-native';

const isIOS = Platform.OS === 'ios' && !Platform.isPad && !Platform.isTV;

const dimensionCheck = (heights: number[], widths: number[]) => {
  const dimen = Dimensions.get('window');
  return heights.includes(dimen.height) || widths.includes(dimen.width);
};

export function isIphoneX() {
  const heights = [780, 812, 844, 896, 926, 852, 932];
  const widths = [780, 812, 844, 390, 896, 428, 393, 430];
  return isIOS && dimensionCheck(heights, widths);
}

export function isIphoneMax() {
  const heights = [896, 926, 932, 956, 980];
  const widths = [414, 428, 430, 440, 460];
  return isIOS && dimensionCheck(heights, widths);
}

export function isIphone16() {
  const heights = [956, 874];
  const widths = [440, 402];
  return isIOS && dimensionCheck(heights, widths);
}

export function hasNotch() {
  return isIphoneX() || isIphone16();
}

export function isIphone14Pro() {
  const heights = [852, 932];
  const widths = [393, 430];
  return isIOS && dimensionCheck(heights, widths);
}

export function isIphone14() {
  const heights = [844];
  const widths = [390];
  return isIOS && dimensionCheck(heights, widths);
}

export function ifIphoneX(iphoneXStyle: any, regularStyle: any) {
  if (isIphoneX() || isIphone14Pro()) {
    return iphoneXStyle;
  }
  return regularStyle;
}

export function getStatusBarHeight(safe: any) {
  return Platform.select({
    ios: ifIphoneX(safe ? 55 : 30, 20),
    android: StatusBar.currentHeight,
    default: 0,
  });
}

export function getBottomSpace() {
  return isIphoneX() ? 34 : 0;
}

export function isIphoneSE() {
  const dimen = Dimensions.get('window');
  return (
    dimen.height <= 667 &&
    dimen.width <= 375
  );
}
