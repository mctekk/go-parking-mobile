import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const TabBookmarkIcon = (props: SvgProps) => {

  const {
    width = 25,
    height = 24,
    fill = '#AAA',
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
        fill={fill}
        d="M18.75 2h-12c-1.93 0-3.5 1.57-3.5 3.5V22l7-3.5 7 3.5v-9h5V5.5c0-1.93-1.57-3.5-3.5-3.5Zm-3.5 16.764-5-2.5-5 2.5V5.5c0-.827.673-1.5 1.5-1.5h8.852a3.45 3.45 0 0 0-.352 1.5v13.264Zm5-7.764h-3V5.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5V11Z"
      />
    </Svg>
  );
};

export default TabBookmarkIcon;
