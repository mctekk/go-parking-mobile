import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';

const CircularClose = (props: any) => {
  const {
    circleColor,
    width = 30,
    height = 30,
    iconColor = 'rgba(235,235,245,0.6)',
  } = props;
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      {...props}
    >
      <G data-name="Group 2905" transform="translate(-7 -7)">
        <Circle
          cx={15}
          cy={15}
          r={15}
          transform="translate(7 7)"
          fill={circleColor || 'rgba(74,71,71,0.24)'}
        />
        <Path
          d="M17.281 26a1.057 1.057 0 00.008 1.461 1.065 1.065 0 001.461.008l3.625-3.625L26 27.461a1.042 1.042 0 001.461-.008 1.05 1.05 0 00.008-1.461l-3.617-3.617 3.617-3.625a1.05 1.05 0 00-.008-1.461A1.042 1.042 0 0026 17.281L22.375 20.9l-3.625-3.627a1.065 1.065 0 00-1.461.008 1.067 1.067 0 00-.008 1.469l3.625 3.625z"
          fill={iconColor}
        />
      </G>
    </Svg>
  );
};

export default CircularClose;
