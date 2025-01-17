import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const UserIcon = (props: SvgProps) => {

  const {
    fill = '#424242',
    width = 24,
    height = 25,
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
        d="M12 2.25a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1h2Z"
      />
    </Svg>
  );
};

export default UserIcon;
