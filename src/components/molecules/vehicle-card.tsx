/* eslint-disable react-native/no-inline-styles */

// Modules
import React from 'react';
import styled from 'styled-components/native';

// Atoms
import CustomText from 'atoms/text';

// Styles
import { Typography } from 'styles';
import { DEFAULT_THEME } from 'styles/theme';
import { CarIconOutline } from 'assets/icons';

interface IVehicleCardProps {
  onPress?: () => void;
  vehicle: any;
}

const Container = styled.TouchableOpacity`
  width: 100%;
  padding-vertical: 28px;
  border-bottom-width: 1px;
  border-color: ${DEFAULT_THEME.cardGray};
`;

const TextContainer = styled.View``;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const IconContainer = styled.View`
  width: 42px;
  height: 42px;
  background-color: ${DEFAULT_THEME.cardGray};
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const VehicleCard = (props: IVehicleCardProps) => {
  const { onPress, vehicle } = props;

  const onCardPress = () => {
    onPress?.();
  };

  return (
    <Container onPress={onCardPress}>
      <Row>
        <IconContainer>
          <CarIconOutline width={20} height={18} fill={DEFAULT_THEME.black} />
        </IconContainer>
        <TextContainer>
          <CustomText
            size={Typography.FONT_SIZE_18}
            weight="700"
            color={DEFAULT_THEME.white}
            style={{ marginBottom: 12 }}
            lineHeight={Typography.FONT_SIZE_18}>
            {`${vehicle?.brand} ${vehicle?.model}`}
          </CustomText>
          <CustomText
            size={Typography.FONT_SIZE_14}
            weight="500"
            color={DEFAULT_THEME.white}
            lineHeight={Typography.FONT_SIZE_14}>
            {vehicle?.plate}
          </CustomText>
        </TextContainer>
      </Row>
    </Container>
  );
};

export default VehicleCard;
