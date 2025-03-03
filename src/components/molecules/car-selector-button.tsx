/* eslint-disable react-native/no-inline-styles */

// Modules
import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

// Atoms
import CustomText from 'atoms/text';
import { TextTransform, translate } from 'components/atoms/localized-label';

// Styles
import { Typography } from 'styles';
import { DEFAULT_THEME } from 'styles/theme';
import { DownArrow } from 'assets/icons';

interface ICarSelectorButtonProps {
  onPress?: () => void;
  disabled?: boolean;
  vehicleSelected?: any;
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
  const { onPress, disabled, vehicleSelected } = props;

  const onCardPress = () => {
    onPress?.();
  };

  const getBgColor = () => {
    if (disabled) {
      return DEFAULT_THEME.darkPrimary;
    }
    if (vehicleSelected?.id) {
      return DEFAULT_THEME.primary;
    }
    return DEFAULT_THEME.cardGray;
  };

  return (
    <Container
      onPress={onCardPress}
      disabled={disabled}
      style={{
        backgroundColor: getBgColor(),
      }}>
      <Content>
        <Row>
          {vehicleSelected?.id ? (
            <>
              <CustomText
                size={Typography.FONT_SIZE_16}
                weight="700"
                style={{ marginRight: 5 }}
                color={DEFAULT_THEME.black}>
                {`${vehicleSelected?.brand} ${vehicleSelected?.model}`}
              </CustomText>
              <CustomText
                size={Typography.FONT_SIZE_12}
                weight="400"
                color={DEFAULT_THEME.black}>
                {vehicleSelected?.plate}
              </CustomText>
            </>
          ) : (
            <CustomText
              size={Typography.FONT_SIZE_16}
              weight="700"
              style={{ marginRight: 5 }}
              color={DEFAULT_THEME.dashGray}>
              {translate('selectVehicle', TextTransform.CAPITALIZE)}
            </CustomText>
          )}
        </Row>
        <DownArrow
          color={vehicleSelected?.id ? DEFAULT_THEME.selectArrow : DEFAULT_THEME.dashGray}
        />
      </Content>
    </Container>
  );
};

export default CarSelectorButton;
