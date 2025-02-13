import Button from 'components/atoms/button';
import Text from 'components/atoms/text';
import styled from 'styled-components/native';
import { Typography } from 'styles';
import { DEFAULT_THEME } from 'styles/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${DEFAULT_THEME.background};
  border-radius: 25px;
  padding-horizontal: 20px;
  padding: 16px;
`;

export const SuccessContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const CheckCircle = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${DEFAULT_THEME.primary};
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border-width: 7px;
  border-color: rgba(255, 184, 0, 0.74);
`;

export const Title = styled(Text)`
  font-size: ${Typography.FONT_SIZE_26}px;
  line-height: ${Typography.FONT_SIZE_32}px;
  color: ${DEFAULT_THEME.white};
  font-weight: 700;
  margin-top: 20px;
`;

export const Content = styled.View`
  margin-top: 20px;
`;

export const SubText = styled(Text)`
  font-size: ${Typography.FONT_SIZE_16}px;
  line-height: ${Typography.FONT_SIZE_24}px;
  color: ${DEFAULT_THEME.white};
  font-weight: 700;
  margin-bottom: 20px;
`;

export const BackgroundContainer = styled.View`
  background-color: rgba(66, 66, 66, 1);
  border-radius: 15px;
  padding: 20px;
`;

export const Wrapper = styled.View``;

export const InfoTitle = styled(Text)`
  font-size: ${Typography.FONT_SIZE_12}px;
  line-height: ${Typography.FONT_SIZE_20}px;
  color: rgba(204, 204, 204, 1);
  margin-bottom: 5px;
`;

export const InfoSubtext = styled(Text)`
  font-size: ${Typography.FONT_SIZE_14}px;
  line-height: ${Typography.FONT_SIZE_18}px;
  color: rgba(204, 204, 204, 1);
  font-weight: 600;
  margin-top: 5px;
`;

export const ContainerWrapper = styled.View`
  flex-direction: row;
  margin-top: 20px;
  align-items: center;
  justify-content: space-evenly;
`;

export const IconContainer = styled.View`
  align-items: center;
  margin-left: 10px;
`;

export const TimeText = styled(Text)`
  color: rgba(204, 204, 204, 1);
  font-size: ${Typography.FONT_SIZE_20}px;
  line-height: ${Typography.FONT_SIZE_24}px;
  font-weight: 700;
`;

export const BottomButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CustomButton = styled(Button)`
  width: 48%;
  border-radius: 50px;
`;
