import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { DEFAULT_THEME } from 'styles/theme';

const CreditCardIcon = (props: SvgProps) => {

  const {
    fill = DEFAULT_THEME.primary,
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
        d="M20 4.75H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-12c0-1.103-.897-2-2-2Zm-16 2h16v2H4v-2Zm0 12v-6h16.001l.001 6H4Z"
      />
      <Path fill={fill} d="M6 14.75h6v2H6v-2Z" />
    </Svg>
  );
};

export default CreditCardIcon;
