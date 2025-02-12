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
`;

export const PaddingContainer = styled.View`
  padding-horizontal: 20px;
`;

export const ScreenHeader = styled(Header)`
  background-color: ${DEFAULT_THEME.transparent};
`;

export const Content = styled.ScrollView``;

export const BottomButton = styled.TouchableOpacity`
  width: 38%;
  border-width: 1px;
  padding-vertical: 14px;
  align-items: center;
  border-radius: 50px;
`;

export const BottomButtonsContainer = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  align-self: center;
  bottom: 50px;
`;

export const TopContainer = styled.View`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 38px;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconContainer = styled.View`
  width: 16px;
  height: 16px;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  background-color: ${DEFAULT_THEME.primary};
  border-radius: 8px;
`;

export const MapContainer = styled.View`
  width: 100%;
  height: 150px;
  border-radius: 20px;
`;
