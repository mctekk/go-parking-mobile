/* eslint-disable react-native/no-inline-styles */

// Modules
import React from 'react';
import styled from 'styled-components/native';

// Atoms
import CustomText from 'atoms/text';
import DashLine from 'components/atoms/dash-line';

// Styles
import { Typography } from 'styles';
import { DEFAULT_THEME } from 'styles/theme';
import { CarIcon, ClockIcon } from 'assets/icons';

interface ISessionCardProps {
  onPress?: () => void;
  order: any;
}

const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: ${DEFAULT_THEME.cardGray};
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const TopContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 10px;
`;

const BottomContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-top: 10px;
`;

const IconRow = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
`;

const IconContainer = styled.View`
  width: 16px;
  height: 16px;
  background-color: ${DEFAULT_THEME.primary};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;

const BottomSectionContainer = styled.View``;

const SessionCard = (props: ISessionCardProps) => {
  const { onPress, order } = props;

  const onCardPress = () => {
    onPress?.();
  };

  return <Container onPress={onCardPress}></Container>;
};

export default SessionCard;
