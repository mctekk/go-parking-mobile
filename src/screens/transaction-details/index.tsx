/* eslint-disable react-native/no-inline-styles */
// Modules
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

// Styles
import {
  Container,
  ScreenHeader,
  Content,
  TopContainer,
  MapContainer,
  TopSectionContainer,
  DetailsContainer,
  DetailRowContent,
  BottomButton,
  DetailRow,
} from './styles';
import { Typography } from 'styles';
import { DEFAULT_THEME } from 'styles/theme';

// Organisms
import ViewContainer from 'components/organisms/view-container';

// Molecules
import PaymentMethod from 'components/molecules/payment-method';

// Atoms
import { TextTransform, translate } from 'components/atoms/localized-label';
import CustomText from 'atoms/text';
import DashLine from 'components/atoms/dash-line';

// Utils
import { ShareUtil } from 'utils';

// Interfaces
import { IParkingLocation, IParkingPrice } from 'core/interface/parking.interface';

export enum TRANSACTION_TYPE {
  BOOKING = 'booking',
  HISTORY = 'history',
  EXTEND = 'extend',
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

export const TransactionDetails = (props: ITransactionDetailsScreenProps) => {
  // Props
  const { navigation, route } = props;
  // Params
  const {
    location,
    parkingName,
    streetLocation,
    price,
    timeSelected,
    type = TRANSACTION_TYPE.HISTORY,
  } = route.params;

  // States
  const [parkingTime, setParkingTime] = useState({ arrive: '', exit: '' });

  const handleParkingTime = () => {
    const date = new Date();
    const arrive = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const [hours, minutes] = timeSelected?.label.split('hour').map(Number);
    date.setHours(date.getHours() + hours, date.getMinutes() + minutes);
    const exit = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    console.log('Arrive:', arrive);
    console.log('Exit:', exit);

    setParkingTime({ arrive, exit });
  };

  useEffect(() => {
    handleParkingTime();
  }, []);

  const rowsData = [
    {
      id: 1,
      titleLocale: 'bookingDate',
      subtitle: '28 July 2024',
      bottomDashLine: false,
    },
    {
      id: 2,
      titleLocale: 'parkingNo',
      subtitle: '#309',
      bottomDashLine: true,
    },
    {
      id: 3,
      titleLocale: type === TRANSACTION_TYPE.EXTEND ? 'remainingParkTime' : 'arriveAfter',
      subtitle: type === TRANSACTION_TYPE.EXTEND ? '00:20:15' : parkingTime?.arrive,
      bottomDashLine: false,
    },
    {
      id: 4,
      titleLocale: type === TRANSACTION_TYPE.EXTEND ? 'extendDuration' : 'exitBefore',
      subtitle: type === TRANSACTION_TYPE.EXTEND ? `+${timeSelected?.label}` : parkingTime?.exit,
      subtitleColor:
        type === TRANSACTION_TYPE.EXTEND ? DEFAULT_THEME.primary : DEFAULT_THEME.titleGray,
      bottomDashLine: false,
    },
    {
      id: 5,
      titleLocale: type === TRANSACTION_TYPE.EXTEND ? 'newParkTime' : 'duration',
      subtitle: type === TRANSACTION_TYPE.EXTEND ? '00:50:15' : timeSelected?.label,
      bottomDashLine: true,
    },
    {
      id: 6,
      titleLocale: 'subtotal',
      subtitle: `$${price?.amount}`,
      bottomDashLine: true,
    },
  ];

  const onShareButtonPress = () => {
    ShareUtil('', 'https://www.google.com');
  };

  const onBookingButtonPress = () => {
    navigation.replace('BookingConfirmationScreen', {
      price: price,
      timeSelected: timeSelected,
      type: type,
      parkingTime: parkingTime,
    });
  };

  const getButtonLocale = () => {
    if (type === TRANSACTION_TYPE.BOOKING) {
      return 'bookingNow';
    }
    if (type === TRANSACTION_TYPE.HISTORY) {
      return 'share';
    }
    if (type === TRANSACTION_TYPE.EXTEND) {
      return 'payNow';
    }
    return '';
  };

  const handleButtonPress = () => {
    if (type === TRANSACTION_TYPE.BOOKING) {
      onBookingButtonPress();
      return;
    }
    if (type === TRANSACTION_TYPE.HISTORY) {
      onShareButtonPress();
      return;
    }
    if (type === TRANSACTION_TYPE.EXTEND) {
      onBookingButtonPress();
      return;
    }
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
          title={translate('transactionDetails', TextTransform.CAPITALIZE)}
          style={{ paddingHorizontal: 0, justifyContent: null }}
          titleProps={{ weight: '700', marginLeft: 10 }}
          backIconColor={DEFAULT_THEME.primary}
        />
        <Content>
          <TopContainer>
            <MapContainer>
              <MapView
                style={styles.map}
                scrollEnabled={false}
                zoomEnabled={false}
                zoomTapEnabled={false}
                cacheEnabled={true}
                region={{
                  latitude: parseFloat(location?.latitude),
                  longitude: parseFloat(location?.longitude),
                  latitudeDelta: 0.0043,
                  longitudeDelta: 0.0034,
                }}
              >
                <Marker
                  coordinate={{
                    latitude: location?.latitude,
                    longitude: location?.longitude,
                  }}
                />
              </MapView>
            </MapContainer>
            <TopSectionContainer>
              <CustomText
                size={Typography.FONT_SIZE_14}
                weight="700"
                style={{ marginBottom: 8 }}
                color={DEFAULT_THEME.white}>
                {parkingName}
              </CustomText>
              <CustomText
                size={Typography.FONT_SIZE_10}
                weight="500"
                lineHeight={Typography.FONT_SIZE_14}
                color={DEFAULT_THEME.white}>
                {streetLocation}
              </CustomText>
            </TopSectionContainer>
          </TopContainer>
          <DashLine color={DEFAULT_THEME.cardGray} />
          <DetailsContainer>
            {rowsData?.map((rowData: any, index: number) => {
              return (
                <DetailRow key={index}>
                  <DetailRowContent>
                    <CustomText
                      size={Typography.FONT_SIZE_10}
                      weight="500"
                      color={DEFAULT_THEME.dashGray}>
                      {translate(rowData?.titleLocale, TextTransform.CAPITALIZE)}
                    </CustomText>
                    <CustomText
                      size={Typography.FONT_SIZE_12}
                      weight="600"
                      color={
                        rowData.subtitleColor ? rowData.subtitleColor : DEFAULT_THEME.titleGray
                      }>
                      {rowData?.subtitle}
                    </CustomText>
                  </DetailRowContent>
                  {rowData?.bottomDashLine && <DashLine color={DEFAULT_THEME.cardGray} />}
                </DetailRow>
              );
            })}
          </DetailsContainer>
          <PaymentMethod style={{ marginTop: 10 }} />
          <DetailRowContent style={{ marginVertical: 16 }}>
            <CustomText
              size={Typography.FONT_SIZE_14}
              weight="500"
              color={DEFAULT_THEME.dashGray}>
              {translate('total', TextTransform.CAPITALIZE)}
            </CustomText>
            <CustomText
              size={Typography.FONT_SIZE_16}
              weight="600"
              color={DEFAULT_THEME.titleGray}>
              {`$${price.amount}`}
            </CustomText>
          </DetailRowContent>
        </Content>

        <BottomButton
          onPress={handleButtonPress}
          title={translate(getButtonLocale(), TextTransform.CAPITALIZE)}
          textStyle={{
            fontSize: Typography.FONT_SIZE_16,
            lineHeight: Typography.FONT_SIZE_20,
            fontWeight: '700',
            color: DEFAULT_THEME.black,
          }}
        />
      </Container>
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  map: {
    width: 53,
    height: 53,
    borderRadius: 5,
  },
});
