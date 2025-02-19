import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const TruckIcon = (props: SvgProps) => {

  const {
    fill = '#F8D73A',
    width = 21,
    height = 18,
  } = props;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox='0 0 21 18'
      {...props}
    >
      <Path
        fill={fill}
        d="M17.4 4a2 2 0 0 0-1.72-1h-2.43V1a1 1 0 0 0-1-1h-10a2 2 0 0 0-2 2v10a2 2 0 0 0 1 1.73 3.503 3.503 0 1 0 7 .27h3.1a3.48 3.48 0 0 0 6.9 0 2 2 0 0 0 2-2V9a1.07 1.07 0 0 0-.14-.52L17.4 4Zm-4.15 1h2.43l1.8 3h-4.23V5Zm-8.5 10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm10 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
      />
    </Svg>
  );
};

export default TruckIcon;
