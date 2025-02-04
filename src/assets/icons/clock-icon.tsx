import * as React from 'react';
import { SvgFromXml } from 'react-native-svg';

const ClockIcon = (props: any) => {
  const { color, size } = props;
  return (
    <SvgFromXml
      xml={`
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 0C2.243 0 0 2.243 0 5C0 7.757 2.243 10 5 10C7.757 10 10 7.757 10 5C10 2.243 7.757 0 5 0ZM5 9C2.7945 9 1 7.2055 1 5C1 2.7945 2.7945 1 5 1C7.2055 1 9 2.7945 9 5C9 7.2055 7.2055 9 5 9Z" fill="black"/>
        <path d="M5.5 2.5H4.5V5.207L6.1465 6.8535L6.8535 6.1465L5.5 4.793V2.5Z" fill="black"/>
        </svg>
      `}
    />
  );
};

export default ClockIcon;
