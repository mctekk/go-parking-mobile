import { Dimensions, PixelRatio, ViewStyle, ScaledSize } from 'react-native';

// Constants can be frozen to prevent modification
const WINDOW_DIMENSIONS: Readonly<ScaledSize> = Dimensions.get('window');
const GUIDELINE_BASE_WIDTH = 375;
const MAX_FONT_SIZE = 30;

// Add memoization for better performance
let lastWindowWidth = WINDOW_DIMENSIONS.width;
let lastScaleSize: { [key: number]: number } = {};

export const scaleSize = (size: number): number => {
  if (lastScaleSize[size] && lastWindowWidth === WINDOW_DIMENSIONS.width) {
    return lastScaleSize[size];
  }
  lastWindowWidth = WINDOW_DIMENSIONS.width;
  lastScaleSize[size] = (WINDOW_DIMENSIONS.width / GUIDELINE_BASE_WIDTH) * size;
  return lastScaleSize[size];
};

export const scaleFont = (size: number): number => 
  Math.min(PixelRatio.getFontScale() * size, MAX_FONT_SIZE);

type SpacingProperty = 'margin' | 'padding';

function dimensions(
  top: number,
  right: number = top,
  bottom: number = top,
  left: number = right,
  property: SpacingProperty
): ViewStyle {
  return {
    [`${property}Top`]: top,
    [`${property}Right`]: right,
    [`${property}Bottom`]: bottom,
    [`${property}Left`]: left,
  } as ViewStyle;
}

export const margin = (
  top: number,
  right?: number,
  bottom?: number,
  left?: number
): ViewStyle => dimensions(top, right, bottom, left, 'margin');

export const padding = (
  top: number,
  right?: number,
  bottom?: number,
  left?: number
): ViewStyle => dimensions(top, right, bottom, left, 'padding');

interface BoxShadowOptions {
  color: string;
  offset?: { height: number; width: number };
  radius?: number;
  opacity?: number;
}

export const boxShadow = ({
  color,
  offset = { height: 2, width: 2 },
  radius = 8,
  opacity = 0.2,
}: BoxShadowOptions): ViewStyle => ({
  shadowColor: color,
  shadowOffset: offset,
  shadowOpacity: opacity,
  shadowRadius: radius,
  elevation: radius,
});
