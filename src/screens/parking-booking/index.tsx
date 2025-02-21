/* eslint-disable react-native/no-inline-styles */
// Modules
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// Styles
import {
  Container,
  ScreenHeader,
  Content,
  BottomButtonsContainer,
  BottomButton,
  TopContainer,
  MapContainer,
  IconContainer,
  Title,
  Subtitle,
  IconsContainer,
  InfoWrapper,
  InfoText,
  InfoSubtext,
  PaddingContainer,
  PriceText,
} from './styles';
import { Typography } from 'styles';
import { DEFAULT_THEME } from 'styles/theme';

// Organisms
import ViewContainer from 'components/organisms/view-container';

// Molecules
import CarSelectorButton from 'components/molecules/car-selector-button';
import TimeSelector from 'components/molecules/time-selector';

// Atoms
import { TextTransform, translate } from 'components/atoms/localized-label';
import DollarIcon from 'assets/icons/dollar-icon';

// Interfaces
import { IParkingLocation, IParkingPrice } from 'core/interface/parking.interface';
import { TRANSACTION_TYPE } from 'screens/transaction-details';

interface IParkingBookingProps {
  navigation: any;
  route: {
    params: IBookingScreenParamsProps;
  };
}

interface IBookingScreenParamsProps {
  parking_id: number;
  location: IParkingLocation;
  parkingName: string;
  parkingAvailable: number;
  streetLocation: string;
  price: IParkingPrice;
  durationTime: number;
  type: string;
}

export const ParkingBooking = (props: IParkingBookingProps) => {
  // Props
  const { navigation, route } = props;
  const {
    parking_id,
    location,
    parkingName,
    streetLocation,
    price,
    durationTime,
    type = 'booking',
    occupiedParkingSpaces,
    totalParkingSpaces,
  } = route.params;
  const parkingLeft = totalParkingSpaces - occupiedParkingSpaces;

  // States
  const [timeSelected, setTimeSelected] = useState<{ id?: string }>({});
  const [carSelected, setCarSelected] = useState<{ id?: string }>({});
  const [pricePerHour, setPricePerHour] = useState<number>(price.amount ?? 0);

  const onBookPress = () => {
    navigation.navigate('TransactionDetails', {
      ...route.params,
      price: { amount: pricePerHour, currency: price.currency },
      timeSelected,
      type,
    });
  };

  const onVehiclePress = () => {
    navigation.navigate('MyVehicles', {});
  };

  const onTimeSelected = (timeInfo: any) => {
    setTimeSelected(timeInfo);
    handlePriceperHour(price.amount, timeInfo.value);
  };

  const handlePriceperHour = (price: number, duration: number) => {
    const total = price * duration;
    setPricePerHour(total);
  };

  return (
    <ViewContainer
      headerViewStyles={{
        paddingTop: 80,
      }}>
      <SafeAreaView />
      <Container>
        <PaddingContainer>
          <ScreenHeader
            title={''}
            style={{ paddingHorizontal: 0, height: 90 }}
            titleProps={{ weight: '700', marginLeft: 10 }}
            backIconColor={DEFAULT_THEME.primary}
          />

          <Content>
            <MapContainer>
              <MapView
                style={styles.map}
                provider={'google'}
                scrollEnabled={false}
                zoomEnabled={false}
                zoomTapEnabled={false}
                cacheEnabled
                region={{
                  latitude: parseFloat(location?.latitude),
                  longitude: parseFloat(location?.longitude),
                  latitudeDelta: 0.0043,
                  longitudeDelta: 0.0034,
                }}>
                <Marker
                  coordinate={{
                    latitude: location?.latitude,
                    longitude: location?.longitude,
                  }}
                />
              </MapView>
            </MapContainer>

            <TopContainer>
              <Title>{parkingName}</Title>
              <Subtitle>{streetLocation}</Subtitle>
              <IconsContainer>
                <InfoWrapper>
                  <IconContainer>
                    <DollarIcon />
                  </IconContainer>
                  <InfoText>{price?.amount}</InfoText>
                  <InfoSubtext>/hr</InfoSubtext>
                </InfoWrapper>

                <InfoWrapper>
                  <IconContainer>
                    <DollarIcon />
                  </IconContainer>
                  <InfoText>{parkingLeft}</InfoText>
                  <InfoSubtext>{translate('available', TextTransform.NONE)}</InfoSubtext>
                </InfoWrapper>
              </IconsContainer>
            </TopContainer>

            <CarSelectorButton
              disabled={type === TRANSACTION_TYPE.EXTEND}
              onPress={onVehiclePress}
            />

            <TimeSelector selectedId={timeSelected.id} onTimeSelected={onTimeSelected} />
          </Content>

          <BottomButtonsContainer>
            <PriceText>${pricePerHour}</PriceText>
            <BottomButton
              onPress={onBookPress}
              style={{
                backgroundColor: timeSelected.id
                  ? DEFAULT_THEME.primary
                  : DEFAULT_THEME.darkPrimary,
              }}
              disabled={!timeSelected.id}
              title={translate('continue', TextTransform.CAPITALIZE)}
              textStyle={{
                fontSize: Typography.FONT_SIZE_16,
                fontWeight: '700',
                color: DEFAULT_THEME.black,
              }}
            />
          </BottomButtonsContainer>
        </PaddingContainer>
      </Container>
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: 160,
    borderRadius: 10,
  },
});
