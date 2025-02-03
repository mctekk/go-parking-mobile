import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const TabReceiptIcon = (props: SvgProps) => {

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
        d="M21.5 11h-3V4a1 1 0 0 0-1-1h-14a1 1 0 0 0-1 1v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-6a1 1 0 0 0-1-1Zm-16 8a1 1 0 0 1-1-1V5h12v13c0 .351.061.688.171 1H5.5Zm15-1a1 1 0 0 1-2 0v-5h2v5Z"
      />
      <Path fill="#AAA" d="M6.5 7h8v2h-8V7Zm0 4h8v2h-8v-2Zm5 4h3v2h-3v-2Z" />
    </Svg>
  );
}
export default TabReceiptIcon;
