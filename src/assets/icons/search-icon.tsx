import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"


const SearchIcon = (props: SvgProps) => {

  const {
    width = 24,
    height = 24,
    fill = '#B2A79F',
    viewBox = '0 0 24 24',
  } = props;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox={viewBox}
      {...props}
    >
      <Path
        fill={fill}
        fillRule="evenodd"
        d="M21.125 0C9.735 0 .5 9.234.5 20.625c0 11.39 9.234 20.625 20.625 20.625 5.02 0 9.622-1.794 13.198-4.775L48.55 50.7a1.875 1.875 0 1 0 2.652-2.652L36.975 33.823a20.542 20.542 0 0 0 4.775-13.198C41.75 9.235 32.516 0 21.125 0ZM4.25 20.625c0-9.32 7.555-16.875 16.875-16.875S38 11.305 38 20.625 30.445 37.5 21.125 37.5 4.25 29.945 4.25 20.625Z"
        clipRule="evenodd"
      />
    </Svg>
  )
}
export default SearchIcon
