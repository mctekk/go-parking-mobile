import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ClockIcon = (props: SvgProps) => {

  const {
    width = 13,
    height = 12,
    fill = '#000',
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
        d="M6.5 1c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5Zm0 9c-2.205 0-4-1.794-4-4 0-2.205 1.795-4 4-4 2.206 0 4 1.795 4 4 0 2.206-1.794 4-4 4Z"
      />
      <Path
        fill={fill}
        d="M7 3.5H6v2.707l1.646 1.647.708-.708L7 5.793V3.5Z"
      />
    </Svg>
  );
};

export default ClockIcon;
