import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { DEFAULT_THEME } from 'styles/theme';

const LocationIcon = (props: any) => {
  const {
    color = DEFAULT_THEME.primary,
    width = 12,
    height = 14,
  } = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox='0 0 12 14'
      {...props}
    >
      <Path
        fill={color}
        d="M6 8.333a2.67 2.67 0 0 0 2.667-2.666A2.67 2.67 0 0 0 6 3a2.67 2.67 0 0 0-2.667 2.667A2.67 2.67 0 0 0 6 8.333Zm0-4A1.335 1.335 0 0 1 6 7a1.335 1.335 0 0 1-1.333-1.333c0-.736.598-1.334 1.333-1.334Z"
      />
      <Path
        fill={color}
        d="M5.613 13.543a.665.665 0 0 0 .774 0c.202-.144 4.966-3.583 4.946-7.876A5.34 5.34 0 0 0 6 .333a5.339 5.339 0 0 0-5.333 5.33C.647 9.96 5.41 13.4 5.613 13.543ZM6 1.667c2.206 0 4 1.794 4 4.003.014 2.959-2.925 5.615-4 6.487-1.074-.872-4.014-3.53-4-6.49 0-2.206 1.794-4 4-4Z"
      />
    </Svg>
  );
};

export default LocationIcon;
