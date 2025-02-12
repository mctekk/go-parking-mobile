/* eslint-disable react-native/no-inline-styles */

// Modules
import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

// Atoms
import CustomText from 'atoms/text';

// Styles
import { Typography } from 'styles';
import { DEFAULT_THEME } from 'styles/theme';
import { DownArrow } from 'assets/icons';

interface ICarSelectorButtonProps {
  onPress?: () => void;
  disabled?: boolean;
}

const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: ${DEFAULT_THEME.cardGray};
  padding-horizontal: 20px;
  padding-vertical: 17px;
  border-radius: 15px;
`;

const Content = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CarSelectorButton = (props: ICarSelectorButtonProps) => {
  const { onPress, disabled } = props;

  const onCardPress = () => {
    onPress?.();
  };

  return (
    <Container
      onPress={onCardPress}
      disabled={disabled}
      style={{
        backgroundColor: disabled
          ? DEFAULT_THEME.darkPrimary
          : DEFAULT_THEME.primary,
      }}>
      <Content>
        <Row>
          <CustomText
            size={Typography.FONT_SIZE_16}
            weight="700"
            style={{ marginRight: 5 }}
            color={DEFAULT_THEME.black}>
            Tesla Model S
          </CustomText>
          <CustomText
            size={Typography.FONT_SIZE_12}
            weight="400"
            color={DEFAULT_THEME.black}>
            EF479379
          </CustomText>
        </Row>
        <DownArrow />
      </Content>
    </Container>
  );
};

export default CarSelectorButton;
