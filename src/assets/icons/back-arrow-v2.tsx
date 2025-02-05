import * as React from 'react';
import { SvgFromXml } from 'react-native-svg';

const BackArrowV2 = (props: any) => {
  const { color = '#F8D73A', size } = props;
  return (
    <SvgFromXml
      xml={`
        <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.9999 7.00003H4.41394L9.70694 1.70703L8.29294 0.29303L0.585938 8.00003L8.29294 15.707L9.70694 14.293L4.41394 9.00003H18.9999V7.00003Z" fill=${color}/>
        </svg>
      `}
    />
  );
};

export default BackArrowV2;
