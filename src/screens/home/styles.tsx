// Modules
import styled from 'styled-components/native';

// Styles
import { DEFAULT_THEME } from 'styles/theme';
import { Colors, Typography } from 'styles';

// Molecules
import MainHeader from 'components/molecules/main-header';


export const Container = styled.View`
  flex: 1;
  background-color: ${DEFAULT_THEME.background};
`;

export const ScreenHeader = styled(MainHeader)`
  justify-content: space-between;
  align-items: center;
`;

export const ScrollContainer = styled.ScrollView`
  flex: 1px;
`;

export const Content = styled.View`
  flex: 1;
  margin-horizontal: 30px;
`;

export const Title = styled.Text`

`;