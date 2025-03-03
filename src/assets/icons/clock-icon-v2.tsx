import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ClockIconV2 = (props: SvgProps) => {

  const {
    width = 20,
    height = 21,
    fill = '#F8D73A',
  } = props;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox='0 0 20 21'
      {...props}
    >
      <Path
        fill={fill}
        d="M10 2.333c-4.879 0-9 4.121-9 9 0 4.88 4.121 9 9 9 4.88 0 9-4.12 9-9 0-4.879-4.12-9-9-9Zm0 16c-3.794 0-7-3.206-7-7s3.206-7 7-7 7 3.206 7 7-3.206 7-7 7Z"
      />
      <Path
        fill={fill}
        d="M11 10.333v-4H9v6h6v-2h-4Zm4.284-8.293L16.696.624l3.01 3-1.413 1.417-3.009-3Zm-10.586 0-2.99 3L.29 3.626l2.99-3L4.698 2.04Z"
      />
    </Svg>
  );
};

export default ClockIconV2;
