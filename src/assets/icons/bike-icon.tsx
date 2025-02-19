import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';


const BikeIcon = (props: SvgProps) => {

  const {
    fill = '#F8D73A',
    width = 25,
    height = 16,
  } = props;

  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill={fill}
      d="m18.93 6-1.7-4.68A2.01 2.01 0 0 0 15.35 0h-2.6v2h2.6l1.46 4H12l-.36-1h1.11V3h-5v2H9.5l1.82 5h-.67C10.21 7.77 8.34 6.12 6 6.01 3.2 5.87.75 8.2.75 11c0 2.8 2.2 5 5 5 2.46 0 4.45-1.69 4.9-4h4.2c.44 2.23 2.31 3.88 4.65 3.99 2.8.13 5.25-2.19 5.25-5 0-2.8-2.2-5-5-5h-.82V6ZM8.57 12c-.4 1.17-1.49 2-2.82 2-1.68 0-3-1.32-3-3s1.32-3 3-3c1.33 0 2.42.83 2.82 2H5.75v2h2.82Zm6.28-2h-1.4l-.73-2h3.03c-.44.58-.76 1.25-.9 2Zm4.9 4c-1.68 0-3-1.32-3-3 0-.93.41-1.73 1.05-2.28l.96 2.64 1.88-.68-.97-2.67c.03 0 .06-.01.09-.01 1.68 0 3 1.32 3 3s-1.33 3-3.01 3Z"
    />
  </Svg>
  );
};

export default BikeIcon;
