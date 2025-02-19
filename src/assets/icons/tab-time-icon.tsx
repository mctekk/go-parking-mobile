import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const TabTimeIcon = (props: SvgProps) => {

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
        d="M12.75 2c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10Zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8Z"
      />
      <Path
        fill={fill}
        d="M13.75 7h-2v5.414l3.293 3.293 1.414-1.414-2.707-2.707V7Z"
      />
    </Svg>
  );
};

export default TabTimeIcon;
