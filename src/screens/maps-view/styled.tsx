import styled from 'styled-components/native';
import { isAndroid } from 'utils/constants';

const TOP_HEIGHT = isAndroid ? 35 : 70;

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding-top: 80px;
`;

export const SearchContainer = styled.View`
  width: 100%;
  position: absolute;
  top: ${TOP_HEIGHT}px;
`;

export const BottomContent = styled.View`
  position: absolute;
  bottom: 0;
`;
