import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PencilIcon = (props: SvgProps) => {

  const {
    width = 16,
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
        d="M15.045 5.401c.378-.378.586-.88.586-1.414 0-.534-.208-1.036-.586-1.414L13.459.987a1.986 1.986 0 0 0-1.414-.586c-.534 0-1.036.208-1.413.585L0 11.585V16h4.413L15.045 5.401Zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584ZM2 14v-1.585l7.04-7.018 1.586 1.586L3.587 14H2Zm-2 4h16v2H0v-2Z"
      />
    </Svg>
  );
};

export default PencilIcon;

