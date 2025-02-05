import React from 'react';
import styled from 'styled-components/native';
import Text from './text';
import { Typography } from 'styles';

interface IVehicleIconProps {
  key: string;
  name: string;
  icon: string;
}

const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  background-color: rgba(248, 215, 58, 0.15);
  border-radius: 15px;
  width: 50px;
  height: 50px;
`;

const Title = styled(Text)`
  margin-top: 10px;
  text-align: center;
  font-size: ${Typography.FONT_SIZE_12}px;
  line-height: ${Typography.FONT_SIZE_14}px;
`;

const VehicleIcon = ({ key, name, icon }: IVehicleIconProps) => {

  const Icon = icon;

  return (
    <Container>
      <IconContainer>
          <Icon />
      </IconContainer>
      <Title>{name}</Title>
    </Container>
  );
};

export default VehicleIcon;
