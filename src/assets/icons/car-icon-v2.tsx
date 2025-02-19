import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CarIconV2 = (props: SvgProps) => {

  const {
    fill = '#F8D73A',
    width = 21,
    height = 19,
  } = props;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox='0 0 21 19'
      {...props}
    >
      <Path
        fill={fill}
        d="m19.272 6.49-1.368-4.106a2.995 2.995 0 0 0-2.845-2.05H5.941a2.995 2.995 0 0 0-2.845 2.05L1.728 6.49A2.003 2.003 0 0 0 .5 8.333v5c0 .753.423 1.402 1.039 1.743-.013.066-.039.126-.039.195v2.062a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2h12v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2.062c0-.069-.026-.13-.039-.195a1.992 1.992 0 0 0 1.039-1.743v-5c0-.829-.508-1.54-1.228-1.844ZM2.5 13.332v-5h16l.002 5H2.5Zm3.441-11h9.117c.431 0 .813.274.949.684l1.106 3.316H3.887l1.105-3.316a1 1 0 0 1 .949-.684Z"
      />
      <Path
        fill={fill}
        d="M5 12.333a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM16 12.333a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      />
    </Svg>
  );
}
export default CarIconV2;
