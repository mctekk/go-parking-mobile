import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { DEFAULT_THEME } from 'styles/theme';

const BookmarkIconFilled = (props: any) => {

  const {
    color = DEFAULT_THEME.primary,
    width = 16,
    height = 20,
  } = props;

  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <Path
      fill={color}
      d="M13.5.833h-11A1.835 1.835 0 0 0 .667 2.667v16.5L8 14.976l7.333 4.19v-16.5A1.835 1.835 0 0 0 13.5.834Z"
    />
  </Svg>
  );
};

export default BookmarkIconFilled;
