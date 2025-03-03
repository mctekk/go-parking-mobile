import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const BookmarkIcon = (props: SvgProps) => {

  const {
    fill = '#AAA',
    width = 16,
    height = 20,
  } = props;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 16 20"
      {...props}
    >
      <Path
        fill={fill}
        d="M13.5.833h-11A1.835 1.835 0 0 0 .667 2.667v16.5L8 14.976l7.333 4.19v-16.5A1.835 1.835 0 0 0 13.5.834Zm0 15.174L8 12.865l-5.5 3.142V2.667h11v13.34Z"
      />
    </Svg>
  );
}
export default BookmarkIcon;
