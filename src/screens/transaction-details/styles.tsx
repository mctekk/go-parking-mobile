// Modules
import styled from 'styled-components/native';

// Styles
import { DEFAULT_THEME } from 'styles/theme';
import { Colors, Typography } from 'styles';

// Molecules
import Header from 'components/molecules/header';

export const Container = styled.View`
  flex: 1;
  background-color: ${DEFAULT_THEME.background};
  border-radius: 25px;
  padding-horizontal: 20px;
`;

export const DetailsContainer = styled.View``;

export const DetailRowContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-vertical: 14px;
`;

export const ScreenHeader = styled(Header)`
  background-color: ${DEFAULT_THEME.transparent};
`;

export const Content = styled.ScrollView``;

export const Title = styled.Text`
  font-size: ${Typography.FONT_SIZE_24}px;
  font-weight: bold;
  color: ${DEFAULT_THEME.text};
  text-align: center;
  margin-bottom: 20px;
`;

export const UserInfoContainer = styled.View`
  justify-content: center;
`;

export const InfoText = styled.Text`
  font-size: ${Typography.FONT_SIZE_16}px;
  line-height: ${Typography.FONT_SIZE_18}px;
  color: ${DEFAULT_THEME.text};
  margin-vertical: 2px;
`;

export const IconContainer = styled.TouchableOpacity`
  align-items: center;
  padding-right: 16px;
  margin-top: 10px;
`;

export const TopContainer = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
`;

export const MapContainer = styled.View`
  width: 53px;
  height: 53px;
  background-color: ${DEFAULT_THEME.titleGray};
  border-radius: 5px;
`;

export const TopSectionContainer = styled.View`
  margin-left: 20px;
`;

export const BottomButton = styled.TouchableOpacity`
  width: 100%;
  padding-vertical: 20px;
  background-color: ${DEFAULT_THEME.primary};
  border-radius: 50px;
  align-items: center;
  position: absolute;
  align-self: center;
  bottom: 50px;
`;
