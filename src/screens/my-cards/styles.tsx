import Button from "components/atoms/button";
import Text from "components/atoms/text";
import Header from "components/molecules/header";
import styled from "styled-components/native";
import { Typography } from "styles";
import { DEFAULT_THEME } from "styles/theme";

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

export const AddCardButton = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  border-radius: 15px;
  align-items: center;
  position: absolute;
  align-self: center;
  bottom: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(66, 66, 66, 1);
  padding-horizontal: 20px;
`;

export const ButtonText = styled(Text)`
  font-size: ${Typography.FONT_SIZE_16}px;
  line-height: ${Typography.FONT_SIZE_20}px;
  font-weight: 700;
  color: rgba(170, 170, 170, 1);
`;

export const IconContainer = styled.View`
  height: 30px;
  width: 30px;
  justify-content: center;
  align-items: center;
  transform: rotate(180deg);
  `;
