/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */

// Modules
import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import useCountDown from 'react-countdown-hook';
import moment from 'moment';

// Atoms
import CustomText from 'atoms/text';

// Styles
import { Typography } from 'styles';
import { DEFAULT_THEME } from 'styles/theme';
import { TextTransform, translate } from 'components/atoms/localized-label';

const ARC_ANGLE_LENGTH = 260;
const BAR_WIDTH = 25;

interface ISessionTimeCounterProps {
  totalTime: number;
  remainingTime: number;
}

const Container = styled.View`
  width: 100%;
  background-color: ${DEFAULT_THEME.transparent};
`;

const CarImage = styled.Image`
  width: 65px;
  height: 170px;
  position: absolute;
  margin-top: ${BAR_WIDTH + 20}px;
`;

const BarCarContainer = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

const SessionTimeCounter = (props: ISessionTimeCounterProps) => {
  const { totalTime, remainingTime } = props;

  // Hooks
  const [timeLeft, { start }] = useCountDown(remainingTime);

  useEffect(() => {
    start();
  }, []);

  const getRotation = () => {
    const rotation = 180 + (360 - ARC_ANGLE_LENGTH) / 2;
    return rotation;
  };

  const getFormattedRemainingTime = (milliseconds: number) => {
    const formattedTime = moment.utc(milliseconds).format('HH:mm:ss');
    return formattedTime;
  };

  const getBarPercentage = () => {
    const percentage = (timeLeft * 100) / totalTime;
    return percentage;
  };

  return (
    <Container>
      <BarCarContainer>
        <AnimatedCircularProgress
          size={218}
          width={BAR_WIDTH}
          fill={100 - getBarPercentage()}
          tintColor={DEFAULT_THEME.primary}
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor={DEFAULT_THEME.cardGray}
          rotation={getRotation()}
          arcSweepAngle={ARC_ANGLE_LENGTH}
        />
        <CarImage source={require('assets/images/progress-car.png')} />
      </BarCarContainer>
      <CustomText
        size={52}
        weight="600"
        align="center"
        style={{ marginBottom: 20 }}
        color={DEFAULT_THEME.primary}>
        {`${getFormattedRemainingTime(timeLeft)}`}
      </CustomText>
      <CustomText
        size={Typography.FONT_SIZE_16}
        weight="500"
        align="center"
        color={DEFAULT_THEME.dashGray}>
        {translate('remainingParkingTime', TextTransform.CAPITALIZE)}
      </CustomText>
    </Container>
  );
};

export default SessionTimeCounter;
