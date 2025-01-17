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

export const Content = styled.SafeAreaView`
  flex: 1px;
  margin: 10px;
`;

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
