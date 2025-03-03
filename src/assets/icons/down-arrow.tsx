import * as React from 'react';
import { SvgFromXml } from 'react-native-svg';

const DownArrow = (props: any) => {
  const { color = '#222222', width = 12, height = 8 } = props;
  return (
    <SvgFromXml
      xml={`
        <svg width=${width} height=${height} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.293 0.459595L5.99997 4.75259L1.70697 0.459595L0.292969 1.87359L5.99997 7.58059L11.707 1.87359L10.293 0.459595Z" fill=${color}/>
        </svg>
      `}
    />
  );
};

export default DownArrow;
