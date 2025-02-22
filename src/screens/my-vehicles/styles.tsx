// Modules
import styled from 'styled-components/native';

// Styles
import { DEFAULT_THEME } from 'styles/theme';

// Molecules
import Header from 'components/molecules/header';
import Text from 'components/atoms/text';
import { Typography } from 'styles';
import Button from 'components/atoms/button';

export const Container = styled.View`
  flex: 1;
  background-color: ${DEFAULT_THEME.background};
  border-radius: 25px;
  padding-horizontal: 20px;
`;

export const ScreenHeader = styled(Header)`
  
`;

export const Content = styled.View`
  flex: 1;
`;

export const PriceContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CustomText = styled(Text)`
  font-size: ${Typography.FONT_SIZE_14}px;
  line-height: ${Typography.FONT_SIZE_16}px;
  color: ${DEFAULT_THEME.white};
`;

export const BottomButtonsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  position: absolute;
  align-self: center;
  bottom: 50px;
`;

export const BottomButton = styled(Button)`
  width: 100%;
  height: 48px;
  border-radius: 50px;
`;
