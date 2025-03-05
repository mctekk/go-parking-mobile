import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { DEFAULT_THEME } from 'styles/theme';

const CarIconOutline = (props: any) => {
  const {
    color = DEFAULT_THEME.primary,
    width = 14,
    height = 13,
  } = props;
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox='0 0 14 13'
    {...props}
  >
    <Path
      fill={color}
      d="m12.848 4.77-.912-2.736A1.997 1.997 0 0 0 10.039.667H3.961a1.997 1.997 0 0 0-1.897 1.367l-.912 2.737A1.335 1.335 0 0 0 .333 6v3.333c0 .502.282.935.693 1.162-.009.044-.026.084-.026.13V12a.667.667 0 0 0 .667.667h.666A.667.667 0 0 0 3 12v-1.333h8V12a.667.667 0 0 0 .667.667h.666A.667.667 0 0 0 13 12v-1.375c0-.046-.017-.086-.026-.13a1.329 1.329 0 0 0 .693-1.162V6c0-.553-.339-1.027-.819-1.23ZM1.667 9.334V6h10.666l.002 3.333H1.667ZM3.96 2h6.078c.287 0 .542.183.632.456l.738 2.21H2.59l.737-2.21A.667.667 0 0 1 3.961 2Z"
    />
    <Path
      fill={color}
      d="M3.333 8.667a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10.667 8.667a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
  </Svg>
  );
};

export default CarIconOutline;
