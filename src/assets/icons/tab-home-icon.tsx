import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const TabHomeIcon = (props: SvgProps) => {

  const {
    width = 24,
    height = 24,
    fill = '#F8D73A',
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
        d="M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2Zm5-2v-5h4v5h-4Zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5v-8.59Z"
      />
    </Svg>
  );
}
export default TabHomeIcon;
