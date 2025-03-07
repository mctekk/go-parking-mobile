/* eslint-disable react-native/no-inline-styles */
// Modules
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

// Styles
import {
  Container,
  ScreenHeader,
  Content,
  BottomButtonsContainer,
  BottomButton,
  CardContainer,
  RowBetween,
  ModelRow,
  Row,
  IconContainer,
} from './styles';
import { Typography } from 'styles';
import { DEFAULT_THEME } from 'styles/theme';

// Organisms
import ViewContainer from 'components/organisms/view-container';

// Molecules
import SessionTimeCounter from 'components/molecules/session-time-counter';
import ConfirmationModal from 'molecules/modals/confirmation-modal';

// Atoms
import { TextTransform, translate } from 'components/atoms/localized-label';
import CustomText from 'atoms/text';
import { CarIconOutline, LocationIcon } from 'assets/icons';
import { TRANSACTION_TYPE } from 'screens/transaction-details';

interface ISessionDetailsScreenProps {
  navigation: any;
  route: any;
}

export const SessionDetails = (props: ISessionDetailsScreenProps) => {
  // Props
  const { navigation, route } = props;
  const {
    parking_id,
    location,
    parkingName,
    parkingAvailable,
    streetLocation,
    price,
    durationTime,
    occupiedParkingSpaces,
    totalParkingSpaces,
  } = route.params;

  // States
  const [confirmationModalVisible, setConfirmationModalVisible] = useState(false);

  const onExtentTimePress = () => {
    navigation.navigate('ParkingBooking', {
      parking_id: parking_id,
      parkingName: parkingName,
      streetLocation: streetLocation,
      location: location,
      parkingAvailable: parkingAvailable,
      price: price,
      durationTime: durationTime,
      occupiedParkingSpaces: occupiedParkingSpaces,
      totalParkingSpaces: totalParkingSpaces,
      type: TRANSACTION_TYPE.EXTEND,
    });
  };

  return (
    <ViewContainer
      headerViewStyles={{
        paddingTop: 80,
      }}
    >
      <SafeAreaView />
      <Container>
        <ScreenHeader
          title={''}
          style={{ paddingHorizontal: 0, height: 90 }}
          titleProps={{}}
          backIconColor={DEFAULT_THEME.primary}
        />
        <Content>
          <SessionTimeCounter totalTime={1800000} remainingTime={1800000} />
          <CardContainer>
            <RowBetween style={{ marginBottom: 8 }}>
              <CustomText
                size={Typography.FONT_SIZE_14}
                weight="600"
                color={DEFAULT_THEME.titleGray}>
                {parkingName}
              </CustomText>
            </RowBetween>
            <CustomText
              size={Typography.FONT_SIZE_12}
              weight="500"
              style={{}}
              lineHeight={Typography.FONT_SIZE_14}
              color={DEFAULT_THEME.dashGray}>
              {streetLocation}
            </CustomText>
            <ModelRow>
              <Row style={{ width: '40%' }}>
                <IconContainer>
                  <LocationIcon width={13} height={13} />
                </IconContainer>
                <CustomText
                  size={Typography.FONT_SIZE_12}
                  weight="600"
                  lineHeight={Typography.FONT_SIZE_14}
                  color={DEFAULT_THEME.titleGray}>
                  1st Floor, P12
                </CustomText>
              </Row>
              <Row style={{ width: '60%' }}>
                <IconContainer>
                  <CarIconOutline width={13} height={13} fill={DEFAULT_THEME.primary} />
                </IconContainer>
                <CustomText
                  size={Typography.FONT_SIZE_12}
                  weight="600"
                  lineHeight={Typography.FONT_SIZE_14}
                  color={DEFAULT_THEME.titleGray}>
                  Tesla Model S
                </CustomText>
              </Row>
            </ModelRow>
          </CardContainer>
        </Content>
        <BottomButtonsContainer>
          <BottomButton onPress={onExtentTimePress} style={styles.extendButton}>
            <CustomText
              size={Typography.FONT_SIZE_16}
              weight="600"
              color={DEFAULT_THEME.dashGray}>
              {translate('extendTime', TextTransform.CAPITALIZE)}
            </CustomText>
          </BottomButton>
          <BottomButton
            onPress={() => setConfirmationModalVisible(true)}
            style={styles.endButton}>
            <CustomText
              size={Typography.FONT_SIZE_16}
              weight="600"
              color={DEFAULT_THEME.black}>
              {translate('endParking', TextTransform.CAPITALIZE)}
            </CustomText>
          </BottomButton>
        </BottomButtonsContainer>
      </Container>
      <ConfirmationModal
        visible={confirmationModalVisible}
        onPressClose={() => setConfirmationModalVisible(false)}
        onLeavePress={() => navigation.pop()}
        titleLocale={'endParkingSession'}
        subTitleLocale={'endSessionSubtitle'}
      />
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  extendButton: {
    borderColor: DEFAULT_THEME.dashGray,
  },
  endButton: {
    borderColor: DEFAULT_THEME.primary,
    backgroundColor: DEFAULT_THEME.primary,
  },
});
