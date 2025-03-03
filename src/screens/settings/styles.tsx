// Modules
import styled from 'styled-components/native';

// Theme
import { DEFAULT_THEME } from 'styles/theme';

// Molecules
import Header from 'components/molecules/header';
import MainHeader from 'components/molecules/main-header';

// Atoms
import Button from 'components/atoms/button';

export const Container = styled.View`
  flex: 1px;
  margin: 10px;
`;

export const MainScreenHeader = styled(MainHeader)`
  justify-content: space-between;
  align-items: center;
`;

export const ScreenHeader = styled(Header)`
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.View`
    flex: 1;
    padding-horizontal: 16px;
`;

export const IconContainer = styled.TouchableOpacity`
  align-items: center;
  padding-right: 16px;
  margin-top: 10px;
`;

export const LogoutButton = styled(Button)`
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  height: 50px;
  width: 50%;
  align-self: center;
  border-radius: 10px;
  background-color: ${DEFAULT_THEME.error};
`;