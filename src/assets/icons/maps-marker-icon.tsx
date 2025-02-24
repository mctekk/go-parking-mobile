import * as React from 'react';
import Svg, { SvgProps, Path, Rect } from 'react-native-svg';



const MapsMarkerIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={41}
    fill="none"
    {...props}
  >
    <Path
      fill="#F8D73A"
      d="M14.022 39.728a4.17 4.17 0 1 0 0-8.34 4.17 4.17 0 0 0 0 8.34Z"
    />
    <Path
      fill="#FDFDFD"
      fillRule="evenodd"
      d="M14.022 32.414a3.145 3.145 0 1 0 0 6.289 3.145 3.145 0 0 0 0-6.29Zm-5.196 3.144a5.196 5.196 0 1 1 10.392 0 5.196 5.196 0 0 1-10.392 0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#F8D73A"
      fillRule="evenodd"
      d="M13.01 22.951h1.86v11.87h-1.86v-11.87Z"
      clipRule="evenodd"
    />
    <Rect width={28} height={28} fill="#F8D73A" rx={14} />
    <Path
      fill="#000"
      d="M15.1 15.894h-2.415a1 1 0 0 1-1-1v-.076a1 1 0 0 1 1-1h2.416c.558 0 1.01-.097 1.357-.289a1.83 1.83 0 0 0 .774-.808 2.73 2.73 0 0 0 .246-1.182c0-.43-.082-.83-.246-1.202a2.055 2.055 0 0 0-.774-.904c-.346-.23-.799-.346-1.357-.346h-1.596a1 1 0 0 0-1 1V20a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h4.1c1.033 0 1.913.196 2.642.587.734.384 1.293.92 1.675 1.605.39.68.583 1.456.583 2.327 0 .904-.194 1.683-.582 2.337-.383.654-.942 1.157-1.676 1.51-.729.352-1.61.528-2.641.528Z"
    />
  </Svg>
);
export default MapsMarkerIcon;
