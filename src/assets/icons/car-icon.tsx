import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';


const CarIcon = (props: SvgProps) => {

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
        fill={fill}
        d="M15.57 0H2.43L0 7v9h3v-2h12v2h3V7l-2.43-7ZM4.5 11C3.67 11 3 10.33 3 9.5S3.67 8 4.5 8 6 8.67 6 9.5 5.33 11 4.5 11Zm9 0c-.83 0-1.5-.67-1.5-1.5S12.67 8 13.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5ZM2.81 5l1.04-3h10.29l1.04 3H2.81Z"
      />
    </Svg>
  );
}
export default CarIcon;
