import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"


const LockIcon = (props: SvgProps) => {

  const {
    fill = '#424242',
    width = 24,
    height = 25,
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
        d="M12 2.75c-2.757 0-5 2.243-5 5v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1v-3c0-2.757-2.243-5-5-5Zm6 10 .002 8H6v-8h12Zm-9-2v-3c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9Z"
      />
    </Svg>
  );
};

export default LockIcon;
