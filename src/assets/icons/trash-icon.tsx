import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const TrashIcon = (props: SvgProps) => {

  const {
    width = 18,
    height = 20,
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
        d="M2 18a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h2V4h-4V2a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2H0v2h2v12ZM6 2h6v2H6V2Zm8 4v12H4V6h10Z"
      />
      <Path fill={fill} d="M6 8h2v8H6V8Zm4 0h2v8h-2V8Z" />
    </Svg>
  );
}

export default TrashIcon;
