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

export const BottomButton = styled.TouchableOpacity`
  width: 48%;
  border-width: 1px;
  padding-vertical: 14px;
  align-items: center;
  border-radius: 50px;
`;

export const BottomButtonsContainer = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const CardContainer = styled.View`
  width: 100%;
  background-color: ${DEFAULT_THEME.cardGray};
  padding-horizontal: 20px;
  padding-vertical: 15px;
  border-radius: 10px;
  margin-top: 30px;
`;

export const RowBetween = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const ModelRow = styled.View`
  flex-direction: row;
  margin-top: 12px;
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
`;
