import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';


const SettingsIcon = (props: SvgProps) => {

  const {
    fill = '#F8D73A',
    width = 24,
    height = 25,
  } = props;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox='0 0 24 25'
      {...props}
    >
      <Path
        fill={fill}
        d="M19 9.336V6.75a1 1 0 0 0-1-1h-2.586l-2.707-2.707a1 1 0 0 0-1.414 0L8.586 5.75H6a1 1 0 0 0-1 1v2.586l-2.707 2.707a.997.997 0 0 0 0 1.414L5 16.164v2.586a1 1 0 0 0 1 1h2.586l2.707 2.707a.999.999 0 0 0 1.414 0l2.707-2.707H18a1 1 0 0 0 1-1v-2.586l2.707-2.707a.998.998 0 0 0 0-1.414L19 9.336Zm-2 6v2.414h-2.414L12 20.336 9.414 17.75H7v-2.414L4.414 12.75 7 10.164V7.75h2.414L12 5.164l2.586 2.586H17v2.414l2.586 2.586L17 15.336Z"
      />
      <Path
        fill={fill}
        d="M12 8.75c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4Z"
      />
    </Svg>
  );
};

export default SettingsIcon;
