import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CheckIcon = (props: SvgProps) => {

  const {
    width = 61,
    height = 46,
    fill = '#fff',
  } = props;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox='0 0 61 46'
      {...props}
    >
      <Path
        stroke={fill}
        strokeLinecap="round"
        strokeWidth={6.846}
        d="m4.227 23.39 15.937 17.337L56.818 4.318"
      />
    </Svg>
  );
}
export default CheckIcon;
