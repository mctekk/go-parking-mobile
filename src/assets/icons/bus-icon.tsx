import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const BusIcon = (props: SvgProps) => {

  const {
    fill = '#F8D73A',
    width = 17,
    height = 19,
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
      d="M.5 14c0 .88.39 1.67 1 2.22V18c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V4c0-3.5-3.58-4-8-4S.5.5.5 4v10ZM4 15c-.83 0-1.5-.67-1.5-1.5S3.17 12 4 12s1.5.67 1.5 1.5S4.83 15 4 15Zm9 0c-.83 0-1.5-.67-1.5-1.5S12.17 12 13 12s1.5.67 1.5 1.5S13.83 15 13 15Zm1.5-6h-12V4h12v5Z"
      />
    </Svg>
  );
};

export default BusIcon;
