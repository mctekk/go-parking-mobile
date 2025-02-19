import React from 'react';
import styled from 'styled-components/native';
import CustomText from 'atoms/text';
import { TouchableOpacityProps } from 'react-native';
import { Typography } from 'styles';
import { DEFAULT_THEME } from 'styles/theme';
import { deviceWidth } from 'utils/constants';

export interface IButtonProps {
  label: string;
  active?: boolean;
  backgroundColor?: string;
  activeBackgroundColor?: string;
  textSize?: number;
  disabled?: boolean;
  disabledBackgroundColor?: string;
}

const Tab = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: ${deviceWidth * 0.44}px;
  border-radius: 11px;
  height: 36px;
`;

export const SingleTab = (props: IButtonProps & TouchableOpacityProps) => {
  const { label, style, disabled, active } = props;
  return (
    <Tab
      disabled={disabled}
      style={[
        {
          backgroundColor: active
            ? DEFAULT_THEME.primary
            : DEFAULT_THEME.cardGray,
        },
        style,
      ]}
      {...props}>
      <CustomText
        color={active ? DEFAULT_THEME.black : DEFAULT_THEME.dashGray}
        size={Typography.FONT_SIZE_12}
        weight="600">
        {label}
      </CustomText>
    </Tab>
  );
};
