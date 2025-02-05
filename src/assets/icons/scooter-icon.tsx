import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ScooterIcon = (props: SvgProps) => {

  const {
    fill = '#F8D73A',
    width = 18,
    height = 16,
  } = props;

  return (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox='0 0 18 16'
    {...props}
  >
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 13a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM1 13a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13h5a6 6 0 0 1 5-5V3a2 2 0 0 0-2-2h-1"
    />
  </Svg>
  );
};

export default ScooterIcon;
