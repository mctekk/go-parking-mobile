import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const BackArrowV2 = (props: SvgProps) => {

  const {
    width = 24,
    height = 24,
    fill = 'rgba(68, 68, 68, 1)',
  } = props;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox='0 0 24 24'
      {...props}
    >
      <Path
        fill={fill}
        fillRule="evenodd"
        d="M10.53 4.97a.75.75 0 0 0-1.06 0l-6.25 6.25a.75.75 0 0 0 0 1.06l6.25 6.25a.75.75 0 1 0 1.06-1.06L5.56 12.5H20a.75.75 0 0 0 0-1.5H5.56l4.97-4.97a.75.75 0 0 0 0-1.06Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
export default BackArrowV2;
