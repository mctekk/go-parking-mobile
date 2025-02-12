/* eslint-disable react-native/no-inline-styles */
// Modules
import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

// Styles
import {
  CheckCircle,
  Container,
  Content,
  SubText,
  SuccessContainer,
  Title,
  BackgroundContainer,
  InfoTitle,
  InfoSubtext,
  Wrapper,
  ContainerWrapper,
  IconContainer,
  TimeText,
  BottomButtonContainer,
  CustomButton,
} from './styles';

// Organisms
import ViewContainer from 'components/organisms/view-container';

// Molecules

// Atoms

// Utils

// Interfaces
import { IParkingLocation, IParkingPrice } from 'core/interface/parking.interface';
import CheckIcon from 'assets/icons/check-icon';
import { TextTransform, translate } from 'components/atoms/localized-label';
import styled from 'styled-components/native';
import { CarIcon, ClockIcon } from 'assets/icons';
import ClockIconV2 from 'assets/icons/clock-icon-v2';
import CarIconV2 from 'assets/icons/car-icon-v2';
import useCountDown from 'hooks/useCountDown';
import { DEFAULT_THEME } from 'styles/theme';
import { Typography } from 'styles';
import { getFormattedRemainingTime } from 'utils';
import NavigationService from 'navigations/navigation-service';

enum TRANSACTION_TYPE {
  BOOKING = 'booking',
  HISTORY = 'history',
}
interface ITransactionDetailsScreenProps {
  navigation: any;
  route: {
    params: ITransactionDetailsParamsProps;
  };
}

interface ITransactionDetailsParamsProps {
  parking_id: number;
  location: IParkingLocation;
  parkingName: string;
  parkingAvailable: number;
  streetLocation: string;
  price: IParkingPrice;
  durationTime: number;
  timeSelected: any;
  type?: TRANSACTION_TYPE;
}



export const BookingConfirmationScreen = (props: ITransactionDetailsScreenProps) => {
  // Props
  const {
    navigation,
    route
  } = props;

  // Params
  const {
    price,
    timeSelected,
    remainingTime = 1800000,
  } = route.params;

  // Hooks
  const [timeLeft, { start }] = useCountDown(remainingTime);

  useEffect(() => {
    start();
  }, []);

  const onDonePress = () => {
    navigation.pop(3);
  };

  const onExtendPress = () => {

  };

  return (
    <ViewContainer>
      <SafeAreaView />
      <Container>
        <SuccessContainer>
          <CheckCircle>
            <CheckIcon />
          </CheckCircle>
          <Title>{translate('bookingSuccess', TextTransform.CAPITALIZE)}</Title>
        </SuccessContainer>

        <Content>
          <SubText>{translate('orderDetail', TextTransform.NONE)}</SubText>

          <BackgroundContainer
            style={styles.infoContainer}
          >
            <Wrapper>
              <InfoTitle>{translate('invoiceNumber', TextTransform.CAPITALIZE)}</InfoTitle>
              <InfoSubtext>GP - 2302884399</InfoSubtext>
            </Wrapper>
            <Wrapper>
              <InfoTitle style={{ textAlign: 'right' }}>
                {translate('total', TextTransform.CAPITALIZE)}
              </InfoTitle>
              <InfoSubtext>$2.10</InfoSubtext>
            </Wrapper>
          </BackgroundContainer>

          <ContainerWrapper>
            <BackgroundContainer
              style={[styles.infoContainer, styles.iconContainerV2, { marginRight: 5 }]}
            >
              <Wrapper>
                <InfoTitle>{translate('vehicle', TextTransform.CAPITALIZE)}</InfoTitle>
                <InfoSubtext>EF479379</InfoSubtext>
              </Wrapper>
              <IconContainer>
                <CarIconV2 />
              </IconContainer>
            </BackgroundContainer>

            <BackgroundContainer
              style={[styles.infoContainer, styles.iconContainerV2, { marginLeft: 5 }]}
            >
              <Wrapper>
                <InfoTitle>{translate('time', TextTransform.CAPITALIZE)}</InfoTitle>
                <InfoSubtext>30 minutes</InfoSubtext>
              </Wrapper>
              <IconContainer>
                <ClockIconV2 />
              </IconContainer>
            </BackgroundContainer>
          </ContainerWrapper>

          <SubText
            style={styles.subTextStyles}
          >
            {translate('timeRemaining', TextTransform.CAPITALIZE)}
          </SubText>

          <BackgroundContainer
            style={styles.timeContainer}
          >
            <TimeText>{getFormattedRemainingTime(timeLeft)}</TimeText>
            <InfoSubtext style={styles.expiredDate}>Expires 28 July 2024, 15:14</InfoSubtext>
          </BackgroundContainer>

          <BottomButtonContainer>
            <CustomButton
              onPress={onExtendPress}
              title={translate('extends', TextTransform.CAPITALIZE)}
              style={{ backgroundColor: 'rgba(170, 170, 170, 1)' }}
              textStyle={styles.buttonTextStyles}
            />
            <CustomButton
              onPress={onDonePress}
              title={translate('done', TextTransform.CAPITALIZE)}
              style={{ backgroundColor: DEFAULT_THEME.primary }}
              textStyle={styles.buttonTextStyles}
            />
          </BottomButtonContainer>

        </Content>
      </Container>
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainerV2: {
    flex: 1,
  },
  subTextStyles: {
    marginTop: 20,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  expiredDate: {
    marginTop: 0,
    fontWeight: '500',
  },
  buttonTextStyles: {
    fontSize: Typography.FONT_SIZE_16,
    lineHeight: Typography.FONT_SIZE_18,
    fontWeight: '700',
    color: 'rgba(45, 45, 45, 1)',
  }
});

export default BookingConfirmationScreen;
