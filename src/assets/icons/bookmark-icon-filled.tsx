import * as React from 'react';
import { SvgFromXml } from 'react-native-svg';

const BookmarkIconFilled = (props: any) => {
  const { color = '#F8D73A', width = 16, height = 20 } = props;
  return (
    <SvgFromXml
      xml={`
        <svg width=${width} height=${height} viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5 0.833252H2.50001C1.48892 0.833252 0.666672 1.6555 0.666672 2.66659V19.1666L8 14.9756L15.3333 19.1666V2.66659C15.3333 1.6555 14.5111 0.833252 13.5 0.833252Z" fill="#F8D73A"/>
        </svg>
      `}
    />
  );
};

export default BookmarkIconFilled;
