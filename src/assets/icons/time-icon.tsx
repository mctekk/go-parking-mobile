import * as React from 'react';
import Svg, { SvgProps, Path } from "react-native-svg"
import { DEFAULT_THEME } from 'styles/theme';

const TimeIcon = (props: any) => {

  const {
    color = DEFAULT_THEME.primary,
    width = 14,
    height = 14,
  } = props;

  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox='0 0 14 14'
    {...props}
  >
    <Path
      fill={color}
      d="M7 .333A6.674 6.674 0 0 0 .333 7 6.674 6.674 0 0 0 7 13.667 6.674 6.674 0 0 0 13.667 7 6.674 6.674 0 0 0 7 .333Zm0 12A5.34 5.34 0 0 1 1.667 7 5.34 5.34 0 0 1 7 1.667 5.34 5.34 0 0 1 12.333 7 5.34 5.34 0 0 1 7 12.333Z"
    />
    <Path
      fill={color}
      d="M7.667 3.667H6.333v3.609L8.53 9.471l.942-.942-1.804-1.805V3.667Z"
    />
  </Svg>
  );
};

export default TimeIcon;
