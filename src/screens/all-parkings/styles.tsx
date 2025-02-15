// Modules
import styled from 'styled-components/native';

// Styles
import { DEFAULT_THEME } from 'styles/theme';

// Molecules
import Header from 'components/molecules/header';

export const Container = styled.View`
  flex: 1;
  background-color: ${DEFAULT_THEME.background};
  border-radius: 25px;
  padding-horizontal: 20px;
`;

export const ScreenHeader = styled(Header)`
  background-color: ${DEFAULT_THEME.transparent};
`;