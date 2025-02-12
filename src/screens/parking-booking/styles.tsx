// Modules
import styled from 'styled-components/native';

// Styles
import { DEFAULT_THEME } from 'styles/theme';

// Molecules
import Header from 'components/molecules/header';
import Text from 'components/atoms/text';
import { Typography } from 'styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${DEFAULT_THEME.background};
  border-radius: 25px;
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

export const BottomButtonsContainer = styled.TouchableOpacity`
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
  margin-bottom: 30px;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const MapContainer = styled.View`
  width: 100%;
  height: 150px;
  border-radius: 20px;
`;

export const Title = styled(Text)`
  font-size: ${Typography.FONT_SIZE_20}px;
  line-height: ${Typography.FONT_SIZE_24}px;
  font-weight: 700;
  color: ${DEFAULT_THEME.white};
  margin-top: 5px;
`;

export const Subtitle = styled(Text)`
  font-size: ${Typography.FONT_SIZE_12}px;
  line-height: ${Typography.FONT_SIZE_14}px;
  color: ${DEFAULT_THEME.white};
  margin-vertical: 15px;
`;

export const CustomText = styled(Text)`
  font-size: ${Typography.FONT_SIZE_14}px;
  line-height: ${Typography.FONT_SIZE_16}px;
  color: ${DEFAULT_THEME.white};
`;

export const IconsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;

export const InfoWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-vertical: 3px;
  margin-horizontal: 10px;
`;

export const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${DEFAULT_THEME.primary};
`;

export const InfoText = styled(Text)`
  font-size: ${Typography.FONT_SIZE_14}px;
  line-height: ${Typography.FONT_SIZE_16}px;
  font-weight: 700;
  color: white;
  margin-left: 5px;
`;

export const InfoSubtext = styled(Text)`
  font-size: ${Typography.FONT_SIZE_14}px;
  line-height: ${Typography.FONT_SIZE_16}px;
  color: white;
  margin-left: 5px;
  font-weight: 400;
`;