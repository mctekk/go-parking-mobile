// Modules
import styled from 'styled-components/native';

// Styles
import { DEFAULT_THEME } from 'styles/theme';
import { Colors, Typography } from 'styles';

// Molecules
import MainHeader from 'components/molecules/main-header';


export const Container = styled.View`
  flex: 1px;
  background-color: ${DEFAULT_THEME.background};
`;

export const HeaderView = styled.View`
  height: 40%;
  width: 100%;
  background-color: ${DEFAULT_THEME.primary};
`;

export const ContentView = styled.View`
  flex: 1;
  background-color: ${DEFAULT_THEME.background};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
