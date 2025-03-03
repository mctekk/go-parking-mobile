import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';


const DollarIcon = (props: SvgProps) => {

  const {
    width = 12,
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
        d="M6 1a5 5 0 1 0 0 10A5 5 0 0 0 6 1Zm0 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
      />
      <Path
        fill={fill}
        d="M6 5.5c-1 0-1-.315-1-.5s.35-.5 1-.5.695.32.7.5h1a1.5 1.5 0 0 0-1.2-1.44V3h-1v.545C4.5 3.71 4 4.355 4 5c0 .56.26 1.5 2 1.5 1 0 1 .34 1 .5 0 .16-.31.5-1 .5-.92 0-1-.43-1-.5H4c0 .46.33 1.275 1.5 1.46V9h1v-.54C7.5 8.29 8 7.645 8 7c0-.56-.26-1.5-2-1.5Z"
      />
    </Svg>
  );
}
export default DollarIcon;
