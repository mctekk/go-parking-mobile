import * as React from 'react';
import { SvgFromXml } from 'react-native-svg';

const MasterCardIcon = (props: any) => {
  const { color, size } = props;
  return (
    <SvgFromXml
      xml={`
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_7303_1120)">
        <rect width="28" height="28" rx="6" fill="#EFEFF4"/>
        <circle cx="11" cy="14" r="7" fill="#FF0000" fill-opacity="0.77"/>
        <circle cx="17" cy="14" r="7" fill="#FFB800" fill-opacity="0.74"/>
        </g>
        <defs>
        <clipPath id="clip0_7303_1120">
        <rect width="28" height="28" fill="white"/>
        </clipPath>
        </defs>
        </svg>
      `}
    />
  );
};

export default MasterCardIcon;
