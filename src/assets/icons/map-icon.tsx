import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const MapIcon = (props: SvgProps) => {

  const {
    fill = '#000',
    width = 24,
    height = 24,
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
        d="m21.447 6.105-6-3a1 1 0 0 0-.895 0L9 5.882 3.447 3.105A1 1 0 0 0 2 4v13c0 .379.214.725.553.895l6 3a1 1 0 0 0 .895 0L15 18.118l5.553 2.776a.992.992 0 0 0 .972-.043c.295-.183.475-.504.475-.851V7c0-.379-.214-.725-.553-.895ZM10 7.618l4-2v10.764l-4 2V7.618Zm-6-2 4 2v10.764l-4-2V5.618Zm16 12.764-4-2V5.618l4 2v10.764Z"
      />
    </Svg>
  );
}
export default MapIcon;
