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

// Atoms
import { TextTransform, translate } from 'components/atoms/localized-label';

// Utils

// Interfaces
import { IParkingLocation, IParkingPrice } from 'core/interface/parking.interface';

// Icons
import CheckIcon from 'assets/icons/check-icon';
import ClockIconV2 from 'assets/icons/clock-icon-v2';
import CarIconV2 from 'assets/icons/car-icon-v2';

// Hooks
import useCountDown from 'hooks/useCountDown';

// Styles
import { DEFAULT_THEME } from 'styles/theme';
import { Typography } from 'styles';

// Utils
import { getFormattedRemainingTime } from 'utils';

// Constants
import { TRANSACTION_TYPE } from 'screens/transaction-details';

interface ITransactionDetailsScreenProps {
  navigation: any;
  route: {
    params: ITransactionDetailsParamsProps;
  };
}

interface ITransactionDetailsParamsProps {
  parking_id: number;
  price: IParkingPrice;
  parkingTime: { start: string; end: string };
  type?: TRANSACTION_TYPE;
}

export const BookingConfirmationScreen = (props: ITransactionDetailsScreenProps) => {
  // Props
  const { navigation, route } = props;

  // Params
  const {
    price,
    timeSelected,
    remainingTime = 1800000,
    type,
    parkingTime,
  } = route.params;

  // Hooks
  const [timeLeft, { start }] = useCountDown(remainingTime);

  useEffect(() => {
    start();
  }, []);

  const onDonePress = () => {
    type === TRANSACTION_TYPE.EXTEND ? navigation.pop(2) : navigation.pop(3);
  };

  const onExtendPress = () => { };

  return (
    <ViewContainer
      headerViewStyles={{
        paddingTop: 80,
      }}
    >
      <SafeAreaView />
      <Container>
        <SuccessContainer>
          <CheckCircle>
            <CheckIcon />
          </CheckCircle>
          <Title>{`${translate(
            type === TRANSACTION_TYPE.EXTEND ? 'paymentSuccess' : 'bookingSuccess',
            TextTransform.CAPITALIZE,
          )}!`}</Title>
        </SuccessContainer>

        <Content>
          <SubText>{translate('orderDetail', TextTransform.NONE)}</SubText>

          <BackgroundContainer style={styles.infoContainer}>
            <Wrapper>
              <InfoTitle>{translate('invoiceNumber', TextTransform.CAPITALIZE)}</InfoTitle>
              <InfoSubtext>GP - 2302884399</InfoSubtext>
            </Wrapper>
            <Wrapper>
              <InfoTitle style={{ textAlign: 'right' }}>
                {translate('total', TextTransform.CAPITALIZE)}
              </InfoTitle>
              <InfoSubtext>${price?.amount}</InfoSubtext>
            </Wrapper>
          </BackgroundContainer>

          <ContainerWrapper>
            <BackgroundContainer
              style={[styles.infoContainer, styles.iconContainerV2, { marginRight: 5 }]}>
              <Wrapper>
                <InfoTitle>{translate('vehicle', TextTransform.CAPITALIZE)}</InfoTitle>
                <InfoSubtext>EF479379</InfoSubtext>
              </Wrapper>
              <IconContainer>
                <CarIconV2 />
              </IconContainer>
            </BackgroundContainer>

            <BackgroundContainer
              style={[styles.infoContainer, styles.iconContainerV2, { marginLeft: 5 }]}>
              <Wrapper>
                <InfoTitle>
                  {translate(
                    type === TRANSACTION_TYPE.EXTEND ? 'extension' : 'time',
                    TextTransform.CAPITALIZE,
                  )}
                </InfoTitle>
                <InfoSubtext>{`${type === TRANSACTION_TYPE.EXTEND ? '+' : ''}${timeSelected.label}`}</InfoSubtext>
              </Wrapper>
              <IconContainer>
                <ClockIconV2 />
              </IconContainer>
            </BackgroundContainer>
          </ContainerWrapper>
          {type !== TRANSACTION_TYPE.EXTEND && (
            <>
              <SubText style={styles.subTextStyles}>
                {translate('timeRemaining', TextTransform.CAPITALIZE)}
              </SubText>

              <BackgroundContainer style={styles.timeContainer}>
                <TimeText>{getFormattedRemainingTime(timeLeft)}</TimeText>
                <InfoSubtext style={styles.expiredDate}>
                  Expires 28 July 2024, {parkingTime?.exit}
                </InfoSubtext>
              </BackgroundContainer>
            </>
          )}
        </Content>
      </Container>

      <BottomButtonContainer>
        {type !== TRANSACTION_TYPE.EXTEND && (
          <CustomButton
            onPress={onExtendPress}
            title={translate('extends', TextTransform.CAPITALIZE)}
            style={{ backgroundColor: 'rgba(170, 170, 170, 1)' }}
            textStyle={styles.buttonTextStyles}
          />
        )}
        <CustomButton
          onPress={onDonePress}
          title={translate('done', TextTransform.CAPITALIZE)}
          style={[
            { backgroundColor: DEFAULT_THEME.primary },
            type === TRANSACTION_TYPE.EXTEND && styles.doneButtonExtend,
          ]}
          textStyle={styles.buttonTextStyles}
        />
      </BottomButtonContainer>

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
  },
  doneButtonExtend: {
    width: '100%',
  },
});

export default BookingConfirmationScreen;
