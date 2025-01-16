// Modules
import React from 'react';
import styled from 'styled-components/native';

// Atoms
import CustomButton from 'components/atoms/button';
import Text from 'components/atoms/text';

// Styles
import { DEFAULT_THEME } from 'styles/theme';
import { Colors, Typography } from 'styles';

export const Container = styled.SafeAreaView`
  flex: 1px;
  background-color: ${Colors.WHITE};
`;

export const LogoImage = styled.Image`
`;

export const Wrapper = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const Title = styled(Text)`
  font-size: ${Typography.FONT_SIZE_36}px;
  line-height: ${Typography.FONT_SIZE_40}px;
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
`;

export const SubTitle = styled(Text)`
  font-size: ${Typography.FONT_SIZE_16}px;
  line-height: ${Typography.FONT_SIZE_22}px;
  color: rgba(0, 0, 0, 1);
  margin-top: 10px;
`;

export const Content = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const InputsContainer = styled.View`
  width: 100%;
  padding-horizontal: 20px;
`;

export const Button = styled(CustomButton)`
  width: 100%;
  height: 50px;
  border-radius: 50px;
`;

export const ForgotPasswordButton = styled(CustomButton)`
  height: 25px;
  width: 100%;
  margin-top: 15px;
  background-color: transparent;
`;

export const SignUpButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 40px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const SignUpText = styled(Text)`
  font-size: ${Typography.FONT_SIZE_16}px;
  line-height: ${Typography.FONT_SIZE_22}px;
  color: ${DEFAULT_THEME.text};
`;

export const SocialContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const SocialTitle = styled(Text)`
  font-size: ${Typography.FONT_SIZE_14}px;
  line-height: ${Typography.FONT_SIZE_18}px;
  color: ${DEFAULT_THEME.text};
  margin-top: 15px;
  text-align: center;
`;
